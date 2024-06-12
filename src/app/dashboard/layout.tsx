import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { TableDemo } from "@/components/BuiltSnippets";
import ProtectedRoute from "@/components/ProtectedRoute";

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
          <TableDemo />
          {children}
        </main>
      </body>
    </html>
  );
}
