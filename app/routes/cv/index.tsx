import { Timeline, TimelineConnector, TimelineItem, TimelineSeparator } from "@mui/lab";
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

  return (
    <Timeline position="alternate">
      {cvEvents.map((cvEvent) => {
        return (
          <TimelineItem>
            <TimelineSeparator sx={{ mx: 2 }}>
              <TimelineDot cvEventType={cvEvent.type} />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent cvEvent={cvEvent} />
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default Cv;
