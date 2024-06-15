import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import BuiltSnippets from "@/components/BuiltSnippets";
import { BentoDemo } from "@/components/BentoDemo";

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
        <main className="grid w-full h-full pl-[300px]">
          <Header />
          <div className="m-4 grid gap-2 sm:grid-cols-12">
            <div className="col-span-8">
              <BuiltSnippets />
            </div>
            <div className="col-span-4 rounded-lg bg-gray-200 shadow">
            </div>
          </div>
          <div className="m-4 gap-2">
            <BentoDemo />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
