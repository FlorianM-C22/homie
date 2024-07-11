// Dashboard page, check BentoDashboard, Header and Sidebar components for more details.

import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import BuiltSnippets from "@/components/BuiltSnippets";
import { BentoDashboard } from "@/components/BentoDashboard";
import { Toaster } from "@/components/ui/toaster";

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
          <div className="m-4 grid gap-2 sm:grid-cols-12">
            <div className="col-span-12">
              <BuiltSnippets />
            </div>
          </div>
          <div className="m-4 gap-2">
            <BentoDashboard />
          </div>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
