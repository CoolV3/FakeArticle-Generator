import Image from "next/image";
import CustomMarkdownInterpreter from "@/components/MarkdownInterpretor";

export default function EmptyArticle() {


    const testMarkdown = `# Testmarkdown
Will it work? This is a 
test Will it work? This is a text Will it work? This is a text Will it work? This is a text Will it work? This is a text Will it work? This is a text


### Small Headline

- liste 1
- liste 2`;

    return(
        <div className="text-black flex flex-col pt-5">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-5xl">Pocketmoney Guidelines</h1>
                <Image className="rounded-2xl rotate-180" width={500} height={500} src={"/CoinsPicture.jpg"} alt={"A Picture with lots of coins on a white Table."}/>
                <p className="self-start pl-5 text-lg">By Constantin Meier</p>
            </div>

            <div className="flex flex-col items-start p-5">
                <CustomMarkdownInterpreter content={testMarkdown}/>
            </div>
        </div>
    )
}