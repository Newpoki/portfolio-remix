import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
          return <List sx={{ listStyle: "initial", ml: 5 }}>{children}</List>;
        },
        li: ({ children }) => {
          return (
            <ListItem sx={{ p: 0, display: "list-item", listStyleType: "circle" }}>
              <ListItemText primaryTypographyProps={{ fontSize: 13 }} sx={{ m: 0 }}>
                {children}
              </ListItemText>
            </ListItem>
          );
        },
        blockquote: ({ children }) => {
          return (
            <Typography
              component="blockquote"
              variant="caption"
              sx={(theme) => ({
                fontStyle: "italic",
              })}
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
