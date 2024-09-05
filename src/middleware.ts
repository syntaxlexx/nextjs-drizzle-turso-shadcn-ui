import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { SessionClaims } from "./types";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();

    const { sessionClaims }: { sessionClaims: SessionClaims } = auth();

    // redirect admins
    if (sessionClaims?.meta?.role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  // Restrict admin routes to users with specific permissions
  if (isAdminRoute(req)) {
    auth().protect(() => {
      const { sessionClaims }: { sessionClaims: SessionClaims } = auth();

      if (!sessionClaims) return false;

      return sessionClaims.meta?.role === "admin";
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
