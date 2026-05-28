import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OnTheMark Vintage — Shop Ethically. Shop Secondhand.",
  description:
    "Curated vintage clothing, accessories & collectibles in Barrie, Ontario. New drops weekly. Shop in store at 118 Dunlop St E or online on Depop.",
  openGraph: {
    title: "OnTheMark Vintage",
    description: "Curated vintage. New drops weekly. Barrie, Ontario.",
    siteName: "OnTheMark Vintage",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
