import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { SITE } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={font.className}>
          <main>{children}</main>

          <Footer />

          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
