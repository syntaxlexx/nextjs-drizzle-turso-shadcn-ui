import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={cn("relative", font.className)}>
          <div className="sticky top-0 z-10 bg-gray-200 bg-opacity-40 py-4 backdrop-blur-md backdrop-filter">
            <Header />
          </div>

          <main>{children}</main>

          <Footer />

          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
