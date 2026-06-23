"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import ArticlePath from "@/components/ArticlePath";
import {usePathname} from "next/navigation";
import FooterComponent from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const WindowPath = usePathname()
  const Path = WindowPath.split("/").slice(1)

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
      <div className="justify-center gap-5 w-full flex flex-col ">
        <div className="z-100 shrink-0">
          <NavbarComponent/>
        </div>
        <ArticlePath Paths={Path}/>
      </div>
      <main className="flex flex-col min-h-0 grow">
      {children}
      </main>
      <div className="z-100 shrink-0">
        <FooterComponent/>
      </div>

      </body>
    </html>
  );
}
