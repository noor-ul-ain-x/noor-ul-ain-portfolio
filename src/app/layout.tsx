import type { Metadata } from "next";
import { Navbar, Footer, ScrollProgress } from "@/components/layout";
import ThemeProvider from "@/providers/ThemeProvider";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
