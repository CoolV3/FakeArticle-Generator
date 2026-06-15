"use client";

import EmptyArticle from "@/components/Article";
import {useState} from "react";
import MarkdownInput from "@/components/MarkdownInput";
import publishArticleAction from "@/app/actions/publishArticleAction";
import Markdown from "react-markdown";

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


    const publishArticle = async () => {
        setError("")

        if (!MarkdownArticle.trim() || !title.trim() || !author.trim() || !image.trim()) {
            setError("Not all fields are filled out.")
            return
        }

        if (title.length > 50) {
            return {success:false, message: "Title is too long"}
        }
        if (author.length > 50) {
            return {success: false, message: "Author name is too long"}
        }
        if (MarkdownArticle.length > 2000) {
            return {success: false, message: "Article is too long."}
        }
        if (!checkValidUrl(image)) {
            return {succsess: false, message: "Image url is not valid"}
        }

        const article: PublishedArticle = {
            title: title,
            author: author,
            image: image,
            markdown: MarkdownArticle
        }

        const response = await publishArticleAction(article)

        if (response.success) {
            console.log("Worked")
        } else (
            setError(response.message)
        )
    }

    return(
        <div className="flex flex-col justify-center items-center pb-10">
            <div className="flex flex-col md:flex-row gap-20 justify-center items-center ">
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
                            <input type="url" placeholder="Max Mustermann" className="border-2 rounded-2xl p-4 text-lg w-100 " onChange={(e) => setAuthor(e.target.value)}/>
                        </div>
                        <div>
                            <p>Title Image url</p>
                            <input type="url" placeholder="https://..." className="border-2 rounded-2xl p-4 text-lg w-100" onChange={(e) => setImage(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="h-screen overflow-y-auto">
                    <EmptyArticle markdown={MarkdownArticle} title={title} author={author} imageUrl={image}/>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <button onClick={(e) => publishArticle()} className="bg-yellow-400 px-10 py-5 rounded-2xl text-3xl cursor-pointer hover:bg-yellow-300 transition-colors duration-700">Publish Article</button>
                {error && (
                    <p className="text-red-600">{error}</p>
                )}
            </div>
        </div>
    )
}