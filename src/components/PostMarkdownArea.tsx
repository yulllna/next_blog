'use client'
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type Props = {
    path: String
}

const PostMarkdownArea = ({path}:Props) => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        fetch(`/data/posts/${path}.md`).then((res) => res.text()).then((text) => 
            setMarkdownContent(text))
    }, [path]);
    

    return (
        <ReactMarkdown 
            children={markdownContent}
            components={{
                code({ className, children }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    // 코드 (```)
                    <SyntaxHighlighter
                      style={nord}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children)
                        .replace(/\n$/, "")
                        .replace(/\n&nbsp;\n/g, "")
                        .replace(/\n&nbsp\n/g, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <SyntaxHighlighter
                      style={nord}
                      background="green"
                      language="textile"
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                // 인용문 (>)
                blockquote({ children, ...props }) {
                  return (
                    <blockquote
                      style={{
                        background: "#7afca19b",
                        padding: "1px 15px",
                        borderRadius: "10px",
                      }}
                      {...props}
                    >
                      {children}
                    </blockquote>
                  );
                },
                img({ ...props }) {
                  return (
                    <img
                      style={{ maxWidth: "40vw" }}
                      src={props.src?.replace("../../../../public/", "/")}
                      alt="MarkdownRenderer__Image"
                    />
                  );
                },
                em({ children, ...props }) {
                  return (
                    <span style={{ fontStyle: "italic" }} {...props}>
                      {children}
                    </span>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]} />
    );
};

export default PostMarkdownArea;