"use client"


import Image from "next/image";
import Link from "next/link";

export default function GuidesOverview() {


    return(
        <div className="flex-col flex ">
            <div className="bg-yellow-100 w-full h-auto flex items-center justify-center p-4 flex-col gap-4">
                <h1 className="text-black text-4xl">Guides</h1>
                <p className="text-black">Carefully crafted guides to help you get things done</p>
            </div>
            <div>
                <div className="p-10 flex text-black gap-5">
                   <Image className="rounded-2xl " width={200} height={100} src={"/CoinsPicture.jpg"} alt={"A Picture with lots of coins on a white Table."}/>
                    <div className="flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-4xl">Pocketmoney Guide for Kids</h1>
                            <p className="text-black">A guide that helps you pick the right amount of pocket money for your Kids</p>
                        </div>
                        <Link href={"/guide/pocketmoney"} className="bg-yellow-400 rounded-2xl p-5 text-2xl cursor-pointer hover:bg-yellow-300 transition-colors flex justify-center">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}