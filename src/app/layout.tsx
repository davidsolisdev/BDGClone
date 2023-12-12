import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - BDG SA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
