import type { Metadata } from "next";
import { Poiret_One } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from "next";

const poiretOne = Poiret_One({
  weight: "400",
  variable: "--font-poiret-one",
  subsets: ["latin"]
}
)

export const metadata: Metadata = {
  title: "Afiq's Photography Portfolio",
  description: "Remember me by the pictures that I take.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poiretOne.variable} antialiased`}
      >
        <main>
          {children}
        </main>
        <Analytics/>
      </body>
    </html>
  );
}
