import Link from "next/link";


export default function ArticleNotFoundComponent() {

    return(
        <div className="flex w-full flex items-center justify-center bg-white px-4 grow -mt-16 flex-col gap-20">
            <div className="flex items-center flex-col">
                <h1 className="text-8xl">404</h1>
                <p className="text-2xl">The article you are looking for could not be found.</p>
            </div>
            <Link className="bg-yellow-400 px-10 py-5 rounded-2xl text-3xl cursor-pointer hover:bg-yellow-300 transition-colors duration-700" href="/">Go Home</Link>
        </div>
    )
}