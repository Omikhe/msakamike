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
  description: "Mike Msaka's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen overflow-hidden">
          {/* Fixed Sidenav */}
          <aside className="flex-shrink-0">
            <Sidenav />
          </aside>

          {/* Scrollable Main Content Area */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
