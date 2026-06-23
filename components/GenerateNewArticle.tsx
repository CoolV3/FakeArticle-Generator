"use client";

import EmptyArticle from "@/components/Article";
import {useState} from "react";
import MarkdownInput from "@/components/MarkdownInput";
import publishArticleAction from "@/app/actions/publishArticleAction";
import { TriangleAlert, Share } from 'lucide-react';
import Link from "next/link";

type PublishedArticle = {
    title: string,
    author: string,
    image: string,
    markdown: string
}

function checkValidUrl(url: string) {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}

export default function GenerateNewArticleComponent() {
    const [MarkdownArticle, setMarkdownArticle] = useState(``)
    const [title, setTitle] = useState("Article Name")
    const [author, setAuthor] = useState("Max Mustermann")
    const [image, setImage] = useState("")
    const [error, setError] = useState("")
    const [showPublishWarning, setShowPublishWarning] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [articleId, setArticleId] = useState<number>(1222)


    const publishArticle = async () => {
        setError("")
        setShowPublishWarning(false)
        if (!MarkdownArticle.trim() || !title.trim() || !author.trim() || !image.trim()) {
            setError("Not all fields are filled out.")
            return
        }

        if (title.length > 50) {
            setError("Title is too long")
            return
        }
        if (author.length > 50) {
            setError("Author name is too long")
            return
        }
        if (MarkdownArticle.length > 2000) {
            setError("Article is too long.")
            return
        }
        if (!checkValidUrl(image)) {
            setError("Image url is not valid")
            return
        }

        const article: PublishedArticle = {
            title: title,
            author: author,
            image: image,
            markdown: MarkdownArticle
        }

        const response = await publishArticleAction(article)

        if (response.success) {
            setShowPublishWarning(false)
            setShowSuccess(true)
            setArticleId(response.articleId as number)
        } else (
            setError(response.message)
        )
    }

    const openShareWindow = async () => {
        await navigator.share({
            url: `/article/${articleId}`
        });

    }
    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center items-center pb-10 relative">
                <div className="flex flex-col md:flex-row md:gap-20 justify-center items-start">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl">Generate an new Article</h1>
                        <p>Generate an real looking news article.</p>
                        <div className="p-10 flex-col flex gap-5">
                            <div>
                                <p>Article Name</p>
                                <input placeholder="Article Name" className="border-2 rounded-2xl p-4 text-lg w-100" onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <MarkdownInput onChange={(e) => setMarkdownArticle(e)}/>
                            <div>
                                <p>Author Name</p>
                                <input type="text" placeholder="Max Mustermann" className="border-2 rounded-2xl p-4 text-lg w-100 " onChange={(e) => setAuthor(e.target.value)}/>
                            </div>
                            <div>
                                <p>Title Image url</p>
                                <input type="url" placeholder="https://..." className="border-2 rounded-2xl p-4 text-lg w-100" onChange={(e) => setImage(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen overflow-y-auto justify-start ">
                        <EmptyArticle markdown={MarkdownArticle} title={title} author={author} imageUrl={image}/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <button onClick={(e) => setShowPublishWarning(true)} className="bg-yellow-400 px-10 py-5 rounded-2xl text-3xl cursor-pointer hover:bg-yellow-300 transition-colors duration-700">Publish Article</button>
                    {error && (
                        <p className="text-red-600">{error}</p>
                    )}
                </div>
            </div>

            {showPublishWarning && (
                <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/40 backdrop-blur-sm " onClick={(e) => setShowPublishWarning(false)}>
                    <div className="absolute flex items-center justify-between flex-col rounded-2xl border-2 w-100 h-220 bg-blue-100 pt-5" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center flex-col">
                            <div className="rounded-full items-center justify-center flex bg-blue-400 p-6 w-25 h-25">
                                <TriangleAlert className="text-red-600 w-20 h-20"/>
                            </div>
                            <h1 className="text-black text-lg text-center p-5">By publishing this article, you confirm that you have read and accepted the information below.</h1>
                            <div className="p-3 flex flex-col gap-5">
                                <div className="bg-blue-400 p-6 rounded-2xl flex items-start justify-start">
                                    <h1 className="text-lg">The Article will be online and stored in the Database for 3 days</h1>
                                </div>
                                <div className="bg-blue-400 p-6 rounded-2xl flex items-start justify-start">
                                    <h1 className="text-lg">You have permission to use the images in the article including the header image</h1>
                                </div>
                                <div className="bg-blue-400 p-6 rounded-2xl flex items-start justify-start">
                                    <h1 className="text-lg">The article may not contain any illegal content, misleading or copyrighted content</h1>
                                </div>
                                <div className="bg-blue-400 p-6 rounded-2xl flex items-start justify-start">
                                    <h1 className="text-lg">You have read and accepted out <Link className="text-blue-900" href={"/privacy"}>Privacy Policy</Link></h1>
                                </div>
                            </div>
                        </div>
                        <div className="pb-3">
                            <button onClick={(e) => publishArticle()} className="bg-yellow-400 px-10 py-5 rounded-2xl text-3xl cursor-pointer hover:bg-yellow-300 transition-colors duration-700">Publish Article</button>
                        </div>
                    </div>
                </div>
            )}
            {showSuccess && (
            <div className="fixed inset-0 z-110 flex items-center justify-center bg-black/40 backdrop-blur-sm " onClick={() => setShowSuccess(false)}>
                <div className="absolute flex items-center justify-between flex-col rounded-2xl border-2 w-120 h-auto bg-blue-100 p-5" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center flex-col gap-5 p-2">
                        <div className="rounded-full items-center justify-center flex bg-blue-400 p-6 w-25 h-25 ">
                            <p className="w-20 h-20 text-center text-5xl flex justify-center items-center">🎉</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-6xl">Success</h1>
                            <p>Your article is now live for three days.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg">Shareable Url</p>
                            <div className="flex gap-2">
                                <Link href={`https://news.cmd-servers.de/article/${articleId}`} target="_blank" className="text-lg bg-gray-300 p-2 px-10 rounded-2xl hover:text-blue-500 cursor-pointer">https://news.cmd-servers.de/article/{articleId}</Link>
                                <Share className="w-10 h-10 cursor-pointer hover:scale-110 transition-all " onClick={(e) => openShareWindow()}> Open share window</Share>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>

    )
}