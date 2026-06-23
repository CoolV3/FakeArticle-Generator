"use client";

import Link from "next/link";
import { Search, MoveUpRight , Menu, X } from 'lucide-react';
import {useState} from "react";


export default function NavbarComponent() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const Links = [
        {
            name: "Latest News",
            href: "/guide/3"
        },
        {
            name: "Politics",
            href: "/guide/1"
        },
        {
            name: "Tech",
            href: "/guide/1"
        },
        {
            name: "World",
            href: "/guide/1"
        },
        {
            name: "Europe",
            href: "/guide/1"
        }
    ]


    return (
            <div className="w-full bg-white z-100">
                <div className="w-full h-20 bg-white flex items-center p-5 justify-between border-b-2 ">
                    <Link className="text-black text-3xl font-bold cursor-pointer hover:text-yellow-500 transition-colors" href="/">PlacNews</Link>
                    <div className="flex gap-6">
                        <Search className="w-8 h-8 text-black cursor-pointer group hover:text-yellow-500 transition-all" onClick={() => setSearchOpen(!searchOpen)}/>
                        <Menu className="w-8 h-8 text-black cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
                    </div>

                </div>

                <div className={`bg-white rounded-2xl fixed right-0 pt-2 flex pr-2 items-center transition-all ease-in-out duration-500 ${searchOpen ? "opacity-100 translate-y-0 pointer-events-auto w-auto" : "pointer-events-none opacity-0 -translate-y-2"}`} >
                    <input className="border-2 rounded-2xl p-2" placeholder="Search for an Article"/>
                    <Link href="/search">
                        <Search className="w-8 h-8 cursor-pointer hover:text-yellow-500 transition-all"/>
                    </Link>
                </div>


                <div className={`fixed right-0 top-0 h-screen w-80 bg-white text-black shadow-2xl p-6 flex flex-col justify-start ease-in-out duration-500 ${menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-x-10"}`}>

                        <X className="w-10 h-10 absolute right-5 top-5" onClick={() => setMenuOpen(false)}/>
                        <div className="flex justify-center-center items-start pt-10 flex-col gap-6">
                            {Links.map((link, index) => (
                            <Link href={link.href} key={index} className="text-5xl group flex items-center justify-center ">{link.name} <MoveUpRight className="opacity-0 group-hover:opacity-100 text-black w-10 h-10 transition-all duration-500"/></Link>
                            ))}
                        </div>

                </div>

            </div>
    )
}