import Image from "next/image";
import Link from "next/link";
import getCrapArticles from "@/app/actions/getCrapArticles";

export default async function GuidesOverview() {

    const articles = await getCrapArticles({howMany: 4})

    return(
        <div className="flex-col flex ">
            <div className="bg-yellow-100 w-full h-auto flex items-center justify-center p-4 flex-col gap-4">
                <h1 className="text-black text-4xl">Guides</h1>
                <p className="text-black">Carefully crafted guides to help you get things done</p>
            </div>
            <div className="flex flex-col gap-10 w-full w-max-200 px-10 py-10">
                {articles.map((article, index ) => (
                    <div key={index} className="flex justify-start items-stretch gap-10 flex-col md:flex-row">
                        <Image alt="Article Title Picture" className="rounded-2xl object-cover" width={400} height={500} src={article.image}/>
                        <div className="flex flex-col justify-between self-stretch">
                            <div>
                                <h1 className="font-bold text-4xl">{article.title}</h1>
                                <p>{article.shortDescription}</p>
                            </div>
                            <Link href={`/article/${article.id}`} className="max-w-100 mt-auto bg-yellow-400 rounded-2xl p-5 text-2xl cursor-pointer hover:bg-yellow-300 transition-colors flex justify-center">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}