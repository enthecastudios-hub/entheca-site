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
  title: "ENTHECA | studios",
  description: "Independent game studio building small, considered experiences.",
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