import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
