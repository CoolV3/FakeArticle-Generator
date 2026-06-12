import ReactMarkdown from "react-markdown"

export default function CustomMarkdownInterpreter({ content } : {content: string}) {

    return(
        <article className="prose prose-neutral text-black">
            <ReactMarkdown
                components={{
                h1: ({children}) => (
                    <h1 className="">
                        {children}
                    </h1>
                    ),

                p: ({children}) => (
                    <p className="text-black">
                        {children}
                    </p>
                ),

                a: ({children}) => (
                    <a>
                        {children}
                    </a>
                ),

                code: ({children}) => (
                    <code>
                        {children}
                    </code>
                )

                }}>
                {content}
            </ReactMarkdown>
        </article>
    )
}