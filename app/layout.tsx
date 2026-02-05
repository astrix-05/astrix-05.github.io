import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Singh | Full-Stack Web3 Developer",
  description: "Portfolio of Ankit Singh (astrix-05) - Full-Stack Web3 Developer building on Solana and NEAR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${jetbrainsMono.variable} antialiased bg-black text-white font-sans`}
      >
        <div className="bg-noise" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
