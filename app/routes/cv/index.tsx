import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { CVEvent, PrismaClient } from "@prisma/client";
import { json, useLoaderData, useTransition } from "remix";
import { TimelineContent } from "./timeline-content";
import { TimelineDot } from "./timeline-dot";

export const loader = async () => {
  const prisma = new PrismaClient();

  const cvEvents = await prisma.cVEvent.findMany({
    orderBy: {
      startedAt: "desc",
    },
  });

  return json(cvEvents);
};

const Cv = () => {
  const cvEvents = useLoaderData<CVEvent[]>();
  const theme = useTheme();
  const isUpperMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Timeline
        position={isUpperMd ? "alternate" : "right"}
        sx={{
          padding: { md: 4 },
        }}
      >
        {cvEvents.map((cvEvent) => {
          return (
            <TimelineItem
              sx={{
                ":before": { display: { xs: "none", md: "block" } },
                "& :nth-of-type(even).MuiTimelineContent-root": { textAlign: "left" },
              }}
              key={cvEvent.id}
            >
              {!isUpperMd && <TimelineOppositeContent sx={{ display: "none" }} />}
              <TimelineSeparator sx={{ mx: 2 }}>
                <TimelineDot cvEventType={cvEvent.type} />
                <TimelineConnector
                  sx={(theme) => ({ backgroundColor: theme.palette.background.paper })}
                />
              </TimelineSeparator>

              <TimelineContent cvEvent={cvEvent} />
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Cv;
