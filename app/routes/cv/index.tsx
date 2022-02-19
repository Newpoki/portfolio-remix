import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { CVEvent, PrismaClient } from "@prisma/client";
import { useLoaderData } from "remix";
import { TimelineContent } from "./timeline-content";
import { TimelineDot } from "./timeline-dot";

export const loader = async () => {
  const prisma = new PrismaClient();

  const cvEvents = await prisma.cVEvent.findMany();

  console.log({ cvEvents });
  return cvEvents;
};

const Cv = () => {
  const cvEvents = useLoaderData<CVEvent[]>();
  const theme = useTheme();
  const isUpperMd = useMediaQuery(theme.breakpoints.up("md"));

  console.log({ isUpperMd });

  return (
    <Timeline position={isUpperMd ? "alternate" : "right"}>
      {cvEvents.map((cvEvent) => {
        return (
          <TimelineItem>
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
  );
};

export default Cv;
