import { CVEvent, CvEventType } from "@prisma/client";
import { TimelineDot as MUITimelineDot } from "@mui/lab";
import { memo, useCallback } from "react";
import { CardMembership, ChildFriendlyOutlined, WorkOutline } from "@mui/icons-material";
import { SxProps } from "@mui/material";

type ITimelineDotProps = {
  cvEventType: CvEventType;
  sx?: SxProps;
};

export const TimelineDot = memo(({ cvEventType, sx }: ITimelineDotProps) => {
  const getTimelineDotIcon = useCallback(() => {
    switch (cvEventType) {
      case CvEventType.WORK:
        return <WorkOutline color="primary" sx={{ ...sx }} />;
      case CvEventType.BIRTH:
        return <ChildFriendlyOutlined color="primary" sx={{ ...sx }} />;
      case CvEventType.DIPLOMA:
        return <CardMembership color="primary" sx={{ ...sx }} />;
    }
  }, []);

  return <MUITimelineDot sx={{ m: 0 }}>{getTimelineDotIcon()}</MUITimelineDot>;
});