import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidenav from "./components/sidenav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Msaka",
  description: "Mike Msaka's portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidenav - Fixed on the left side */}
          <Sidenav />
          
          {/* Main content area */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
