import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MAINTENANCE_MODE } from "@/lib/config";
import MaintenanceScreen from "@/components/MaintenanceScreen";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enthecastudios.com"),
  title: "ENTHECA | studios",
  description: "Independent game studio building small, considered experiences.",
  openGraph: {
    title: "ENTHECA | studios",
    description: "Independent game studio building small, considered experiences.",
    url: "https://enthecastudios.com",
    siteName: "ENTHECA Studios",
    images: [
      {
        url: "https://enthecastudios.com/ENTHECAstudios.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {MAINTENANCE_MODE ? <MaintenanceScreen /> : children}
      </body>
    </html>
  );
}