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
        <NavbarComponent/>
        <ArticlePath Paths={Path}/>
      </div>
      <div className="grow">
      {children}
      </div>

        <FooterComponent/>

      </body>
    </html>
  );
}
