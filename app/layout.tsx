import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE.name} | Fazendas no Tocantins e MATOPIBA`,
  description: SITE.description,
  keywords: [
    "fazendas no Tocantins",
    "fazendas à venda",
    "corretor de fazendas",
    "MATOPIBA",
    "imóveis rurais Tocantins",
  ],
  openGraph: {
    title: `${SITE.name} | Fazendas no Tocantins e MATOPIBA`,
    description: SITE.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F1E8] text-[#1F3D2B]">
        {children}
      </body>
    </html>
  );
}
