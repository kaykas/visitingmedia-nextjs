import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visiting Media - Hospitality Sales Enablement Platform",
  description: "Immersive selling platform that empowers hospitality sales teams to close bookings faster. Delivering technology that leverages immersion to drive competitive advantage.",
  keywords: ["hospitality", "sales enablement", "virtual tours", "hotel technology", "immersive content"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
