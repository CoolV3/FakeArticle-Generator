import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function FooterComponent() {

    const FooterLinks = [
        {
         name: "News" ,
         href: "/fsafd"
        },
        {
            name: "Politics" ,
            href: "/fsafd"
        },
        {
            name: "World" ,
            href: "/fsafd"
        },
        {
            name: "America" ,
            href: "/fsafd"
        },
        {
            name: "Europe" ,
            href: "/fsafd"
        },
        {
            name: "Tech" ,
            href: "/fsafd"
        }
    ]

    return(
        <div className="border-t-2 flex p-10 gap-10 justify-between">
            <h1 className="text-4xl font-bold">PlacNews</h1>
            <div className="grid md:grid-cols-3 gap-y-4 gap-x-6 grid-cols-2 border-l-2 p-5">
                {FooterLinks.map((link, index) => (
                    <p key={index} className="text-2xl flex items-center group ">{link.name} <ArrowUpRight className="text-black w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500"/></p>
                ))}
            </div>
        </div>
    )
}