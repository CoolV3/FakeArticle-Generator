"use client"

import { ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function ArticlePath({Paths}: {Paths:string[] }) {

    if (Paths == null) {
        return
    }

    if (Paths.length == 1) {
        return
    }
    const PathUppercase = Paths.map((path) => (
        path.replace("-", " ").charAt(0).toUpperCase() + path.slice(1)
    ))

    return (
        <div className="text-black flex-row flex">
            {PathUppercase.map((path, index) => {
                const clickPath = "/" + Paths.slice(0, index + 1).join("/");

                return (
                    <div className="px-2 flex" key={index}>
                        <ChevronRight />
                        <Link className="cursor-pointer underline" href={clickPath}>
                            {path}
                        </Link>
                    </div>
                );
            })}
        </div>
    );

}