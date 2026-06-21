import Image from "next/image";
import CustomMarkdownInterpreter from "@/components/MarkdownInterpretor";

export default function EmptyArticle({markdown, title, author, imageUrl}: {markdown: string, title: string, author: string, imageUrl: string}) {



    return(
        <article className="text-black flex flex-col pt-5 mx-auto w-full  max-w-400">
            <div className="flex flex-col gap-4 justify-center items-center px-5 ">
                <h1 className="text-5xl transition-all font-bold">{title}</h1>
                {imageUrl != "" && (
                <Image className="rounded-2xl w-full h-full max-h-200 max-w-300 " width={500} height={500} src={imageUrl} alt={"Article Head Image"}/>
                )}
                <p className="self-start pl-5 text-lg">By {author}</p>
            </div>

            <div className="flex flex-col items-center p-5">
                <CustomMarkdownInterpreter content={markdown}/>
            </div>
        </article>
    )
}