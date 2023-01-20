import React from "react";
import ReactMarkdown from "react-markdown";

import "../styles/layout.sass"

type Props = {
    body : string
}

const Markdown:React.FC<Props> = ( {body} ) => {

    return (
        <div className="markdown prose max-w-none">
            <ReactMarkdown>
                {body}
            </ReactMarkdown>
        </div>
    )
}


export default Markdown