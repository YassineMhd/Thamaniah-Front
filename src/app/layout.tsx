import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "iTunes Search - Discover Music, Podcasts & More",
  description: "Search and discover content from iTunes - podcasts, music, movies, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-gray-900 text-white min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
