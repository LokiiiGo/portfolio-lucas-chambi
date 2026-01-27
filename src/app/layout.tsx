import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import '@/src/app/globals.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Lucas Chambi",
  icons: "./portfolio.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./portifolio.png" />
      <title>Portfólio - Lucas Chambi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GluestackUIProvider mode="dark">
          {children}
        </GluestackUIProvider>
      </body>
    </html>
  );
}
