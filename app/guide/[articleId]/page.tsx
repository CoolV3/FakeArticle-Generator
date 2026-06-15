import GuidesOverview from "@/components/guidesOverview";
import prisma from "@/lib/prisma";
import {notFound} from "next/navigation";
import EmptyArticle from "@/components/Article";

export default async function ArticlePage({params}: {params: Promise<{ articleId: string}>}) {
    const {articleId} = await params
    const id = Number(articleId)

    if (!articleId || !Number.isInteger(id)) {
        notFound();
    }

    const currentArticle = await prisma.article.findUnique({
        where: {
            id,
        },
    })
    if (!currentArticle) {
        notFound()
    }

    return(
        <div>
            <EmptyArticle markdown={currentArticle.markdownContent} title={currentArticle.title} author={currentArticle.author} imageUrl={currentArticle.headerImageUrl}/>
        </div>
    )
}