import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import EmptyArticle from "@/components/Article";
import getCrapArticleById  from "@/app/actions/getCrapArticles";
import ArticleNotFoundComponent from "@/components/ArticleNotFound";



export default async function ArticlePage({params}: { params: Promise<{ articleId: string }>; }) {
    const { articleId } = await params;

    const numberid = Number(articleId);
    const isDatabaseId = Number.isInteger(numberid) && articleId.trim() !== "";

    if (isDatabaseId) {
        const currentArticle = await prisma.article.findUnique({
            where: {
                id: numberid,
            },
        });

        if (!currentArticle) {
            return <ArticleNotFoundComponent/>
        }

        return (
            <div>
                <EmptyArticle
                    markdown={currentArticle.markdownContent}
                    title={currentArticle.title}
                    author={currentArticle.author}
                    imageUrl={currentArticle.headerImageUrl}
                />
            </div>
        );
    }
    const articleArray = await getCrapArticleById({id: articleId, howMany: 1});
    const crapArticle =  articleArray[0]

    if (!crapArticle) {
        return <ArticleNotFoundComponent/>
    }

    return (
        <div className="mx-auto w-full">
            <EmptyArticle
                markdown={crapArticle.content}
                title={crapArticle.title}
                author={crapArticle.author}
                imageUrl={crapArticle.image}
            />
        </div>
    );
}
