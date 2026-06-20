import Link from "next/link";
import Image from "next/image";
import getCrapArticles from "@/app/actions/getCrapArticles";
export default async function HomePage() {

    const articles = await getCrapArticles({howMany: 4})

    return (
        <div className="flex flex-col items-center justify-center px-10">
            <div className="flex items-start justify-start pt-5 flex-col">
                <div className="flex flex-col items-start justify-center gap-2 pb-10">
                    <Image  className="rounded-2xl" width={1000} height={500} src="https://cdn.pixabay.com/photo/2016/03/26/19/17/enclosed-1281148_1280.jpg" alt="A Picture with lots of coins on a white Table."/>
                    <h1 className="text-7xl font-bold">A crazy headline.</h1>
                </div>
                <div className="flex flex-col gap-10">
                    {articles.map((article, index ) => (
                    <div key={index} className="flex justify-start items-stretch gap-10 flex-col md:flex-row">
                        <Image alt="Article Title Picture" className="rounded-2xl object-cover" width={400} height={500} src={article.image}/>
                        <div className="flex flex-col justify-between self-stretch">
                            <div>
                                <h1 className="font-bold text-4xl">{article.title}</h1>
                                <p>{article.shortDescription}</p>
                            </div>
                            <Link href={`/article/${article.id}`} className="mt-auto bg-yellow-400 rounded-2xl p-5 text-2xl cursor-pointer hover:bg-yellow-300 transition-colors flex justify-center">Read more</Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}