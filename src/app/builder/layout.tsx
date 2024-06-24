"use client";

import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import CategoryMultiSelect from "@/components/categorymultiselect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <Sidebar />
        <main className="grid w-full h-full pl-[250px]">
          <Header />
          <div className="flex items-center justify-center min-h-screen">
            <CategoryMultiSelect />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
