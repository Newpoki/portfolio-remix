import { TimelineContent as MUITimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { CVEvent } from "@prisma/client";
import { ReactNode, useMemo } from "react";
import { Markdown } from "~/components/markdown";

type ITimelineContentProps = {
  cvEvent: CVEvent;
};

export const TimelineContent = ({ cvEvent }: ITimelineContentProps) => {
  const displayedDate = useMemo(() => {
    const formatedStartedAt = new Intl.DateTimeFormat("fr-FR").format(new Date(cvEvent.startedAt));

    const formatedEndedAt = cvEvent.endedAt
      ? new Intl.DateTimeFormat("fr-FR").format(new Date(cvEvent.endedAt))
      : "Today";
    return `${formatedStartedAt} → ${formatedEndedAt}`;
  }, []);

  return (
    <MUITimelineContent
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        mb: 2,
      })}
    >
      <Typography
        component="h2"
        variant="body1"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        {cvEvent.title}
      </Typography>

      <Typography
        component="h3"
        variant="body1"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.grey[500],
        })}
      >
        {`${cvEvent.city}, ${cvEvent.country}`}
      </Typography>

      <Markdown>{cvEvent.content}</Markdown>

      <Typography
        sx={(theme) => ({ color: teal[500], fontWeight: theme.typography.fontWeightBold })}
      >
        {displayedDate}
      </Typography>
    </MUITimelineContent>
  );
};
