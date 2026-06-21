import Link from "next/link";
import Image from "next/image";
import getCrapArticles from "@/app/actions/getCrapArticles";
export default async function HomePage() {

    const fetchedArticles = await getCrapArticles({howMany: 4})

    const titleArticle = fetchedArticles[0]
    const articles = fetchedArticles.slice(1)
    return (
        <div className="flex flex-col items-center justify-center px-10 pb-10 ">
            <div className="flex items-start justify-start pt-5 flex-col max-w-400 ">
                <div className="flex flex-col items-center justify-center gap-2 pb-10 border-b-2 ">
                    <Image  className="rounded-2xl" width={1000} height={500} src={titleArticle.image} alt={"Title Image"}/>
                    <h1 className="md:text-7xl font-bold text-5xl">{titleArticle.title}</h1>
                    <p>{titleArticle.shortDescription}</p>
                    <Link href={`/article/${titleArticle.id}`} className="max-w-100 w-full mt-auto bg-yellow-400 rounded-2xl p-5 text-2xl cursor-pointer hover:bg-yellow-300 transition-colors flex justify-center">Read more</Link>
                </div>
                <div className="flex flex-col gap-10 w-full w-max-200 pt-10">
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
        </div>
    );
}