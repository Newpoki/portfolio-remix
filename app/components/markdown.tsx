import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { List, ListItem, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

interface IMarkdownProps {
  children: string;
}

export const Markdown = memo(({ children }: IMarkdownProps) => {
  /* Vars */

  /* Render */

  return (
    <ReactMarkdown
      components={{
        em: ({ children, ...props }) => <strong {...props}>{children}</strong>,
        a: ({ href, children, className }) => {
          return (
            <Typography
              component="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              className={className}
              sx={{ color: teal["500"] }}
            >
              {children}
            </Typography>
          );
        },
        ul: ({ children }) => {
          return <List sx={{ fontSize: 13 }}>{children}</List>;
        },
        li: ({ children }) => {
          return <ListItem sx={{ p: 0 }}>{children}</ListItem>;
        },
        blockquote: ({ children }) => {
          return (
            <Typography
              component="blockquote"
              sx={(theme) => ({ fontStyle: theme.typography.caption })}
            >
              {children}
            </Typography>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
});
