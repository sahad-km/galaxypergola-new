import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cluster Outdoor Solutions | Premium Pergolas, Canopies & Blinds NZ",
  description: "New Zealand's premium custom-engineered outdoor pergolas, motorized louvre systems, fixed canopies, carports, and Ziptrak outdoor blinds. Custom built for NZ weather.",
  keywords: ["Pergolas NZ", "Louvre Pergola Auckland", "Outdoor Blinds Christchurch", "Cantilever Carports", "Ziptrak Blinds New Zealand", "Patio Canopies"],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Cluster Outdoor Solutions | Premium Pergolas, Canopies & Blinds NZ",
    description: "Premium custom-engineered outdoor living structures designed for New Zealand conditions.",
    type: "website",
    locale: "en_NZ",
    url: "https://www.clusteroutdoor.co.nz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/logo-icon.png" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
