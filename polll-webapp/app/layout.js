"use client";
import "./globals.css";

export const metadata = {
  title: "PolIl dApp",
  description: "Its a Opinion based Social media dApp",
};

import { Neucha } from "next/font/google";
const fonta = Neucha({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonta.className}>{children}</body>
    </html>
  );
}
