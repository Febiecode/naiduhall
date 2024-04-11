import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NaiduHall",
  description: "NaiduHall Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="customMain">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
