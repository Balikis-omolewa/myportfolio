import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Balikis Omolewa | Software Developer",
    description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
