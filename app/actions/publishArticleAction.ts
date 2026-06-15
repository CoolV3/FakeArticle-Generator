"use server";

import prisma from "@/lib/prisma";
import {headers} from "next/headers";

type PublishedArticle = {
    title: string,
    author: string,
    image: string,
    markdown: string
}

const DAILY_ARTICLE_LIMIT = 2;
const ARTICLE_COOLDOWN_SECONDS = 10;

function getStartOfToday() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
}

function checkValidUrl(url: string) {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}

const articleCooldownMap = new Map<string, number>();

export default async function publishArticleAction(input: PublishedArticle) {
    const title = input.title.trim()
    const author = input.author.trim()
    const image = input.image.trim()
    const markdown = input.markdown.trim()

    if (!title || !author || !image || !markdown) {
        return {success: false, message: "Please fill in all Fields"}
    }
    if (title.length > 50) {
        return {success:false, message: "Title is too long"}
    }
    if (author.length > 50) {
        return {success: false, message: "Author name is too long"}
    }
    if (markdown.length > 2000) {
        return {success: false, message: "Article is too long."}
    }
    if (!checkValidUrl(image)) {
        return {success: false, message: "Image url is not valid"}
    }

    const allHeaders = await headers()
    const senderIp = allHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || allHeaders.get("x-real-ip") || "anonymous";

    const timeNow = Date.now()

    const lastPublishedAt = articleCooldownMap.get(senderIp) ?? 0;


    if (timeNow - lastPublishedAt < ARTICLE_COOLDOWN_SECONDS * 1000) {
        return {
            success: false,
            message: `Please wait ${ARTICLE_COOLDOWN_SECONDS} seconds before publishing another article.`,
        };
    }

    articleCooldownMap.set(senderIp, timeNow);

    const startOfToday = getStartOfToday();

    const articlesCreatedToday = await prisma.article.count({
        where: {
            createdAt: {
                gte: startOfToday,
            },
            ipAdress: senderIp,
        },
    });

    if (articlesCreatedToday >= DAILY_ARTICLE_LIMIT) {
        return {
            success: false,
            message: "Daily article limit reached.",
        };
    }

    const deletesAtDate = new Date(timeNow + 3 * 24 * 60 * 60 * 1000)
    console.log("Got till here ")
    const newArticle = await prisma.article.create({
        data: {
            title,
            author,
            headerImageUrl: image,
            markdownContent: markdown,
            ipAdress: senderIp,
            deletesAt: deletesAtDate
        },
    });

    return {
        success: true,
        message: "Article published successfully.",
        articleId: newArticle.id
    };
}
