import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Sales Website",
  description: "A modern sales website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
