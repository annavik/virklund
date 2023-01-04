import React from "react";
import ReactMarkdown from "react-markdown";
import { List } from "../List/List";
import styles from "./MarkdownContent.module.scss";

export const MarkdownContent = ({ content }: { content: string }) => (
  <ReactMarkdown
    className={styles.MarkdownContent}
    components={{
      ul: ({ node, ...props }) => {
        const listItems = props.children
          .filter((c: any) => c.type === "li")
          .map((c: any) => ({
            id: c.key,
            content: c.props.children,
          }));

        return <List items={listItems ?? []} />;
      },
    }}
  >
    {content}
  </ReactMarkdown>
);
