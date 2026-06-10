import { Menu } from 'lucide-react'
import Link from "next/link";


export default function NavbarComponent() {

    return (
        <div className="w-full h-20 bg-yellow-200 flex items-center p-5 justify-between">
            <Link className="text-black text-3xl font-bold cursor-pointer hover:text-yellow-500 transition-colors" href="/" >ParentGuides</Link>
            <Menu className="w-8 h-8 text-black cursor-pointer"/>
        </div>
    )
}