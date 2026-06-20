"use server";
import fakeArticles from "@/data/fakeArticles.json";


export type CrapArticle = {
    title: string;
    shortDescription: string;
    content: string;
    image: string;
    author: string;
    id: string;
    category: string;
};


export default async function getCrapArticles({howMany, category, id}: {howMany: number, category?: string, id?: string}) {
    const articles = fakeArticles as CrapArticle[];

    const getRandomArticles = async (howManyArticles: number) => {
        const shuffled = [...articles]

        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
        }

        return shuffled.slice(0, howManyArticles);

    }

    if (id != undefined) {
        return articles.filter((articles) => articles.id == id)
    }

    if (category != undefined) {
        const mixedArticles = await getRandomArticles(howMany);

        const filteredArticles = mixedArticles.filter(
            (article) => article.category === category
        );
        return filteredArticles
    }

    return getRandomArticles(howMany)
}