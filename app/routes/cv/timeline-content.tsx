import { TimelineContent as MUITimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";
import { CVEvent } from "@prisma/client";
import { ReactNode } from "react";
import { Markdown } from "~/components/markdown";

type ITimelineContentProps = {
  cvEvent: CVEvent;
};

export const TimelineContent = ({ cvEvent }: ITimelineContentProps) => {
  return (
    <MUITimelineContent
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        mb: 2,
      })}
    >
      <Typography component="h2" variant="body1">
        {cvEvent.title}
      </Typography>

      <Typography component="h3" variant="body2">
        {`${cvEvent.city}, ${cvEvent.country}`}
      </Typography>

      <Markdown>{cvEvent.content}</Markdown>
    </MUITimelineContent>
  );
};
