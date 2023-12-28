import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Throne",
  description: "A Next.js 13 Meta Throne Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider >
      <html lang='en'>
        <body className={`${inter.className} bg-[#ACB1D6]`}>
          <div className="w-full flex justify-center items-center min-h-screen">
          {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}