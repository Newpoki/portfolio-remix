import { TimelineContent as MUITimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";
import { CVEvent } from "@prisma/client";
import { ReactNode } from "react";

type ITimelineContentProps = {
  cvEvent: CVEvent;
};

export const TimelineContent = ({ cvEvent }: ITimelineContentProps) => {
  return (
    <MUITimelineContent
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Typography component="h2" variant="body1">
        {cvEvent.title}
      </Typography>

      <Typography component="h3" variant="body2">
        {`${cvEvent.city}, ${cvEvent.country}`}
      </Typography>

      <Typography>{cvEvent.content}</Typography>
    </MUITimelineContent>
  );
};
