import { Menu } from 'lucide-react'


export default function NavbarComponent() {

    return (
        <div className="w-full h-20 bg-yellow-100 flex items-center p-5 justify-between">
            <h1 className="text-black text-3xl font-bold">ParentGuides</h1>
            <Menu className="w-8 h-8 text-black cursor-pointer"/>
        </div>
    )
}