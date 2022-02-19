import type { MetaFunction } from "remix";
import Typography from "@mui/material/Typography";
import { Box, SxProps } from "@mui/system";

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Home",
    description: "The portfolio home page",
  };
};

const titleStyles: SxProps = {
  fontWeight: 300,
  fontSize: 30,
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom sx={titleStyles}>
        Jason Savelli
      </Typography>

      <Typography variant="h3" component="h1" gutterBottom sx={titleStyles}>
        Front-End web developer
      </Typography>

      <Typography variant="h3" component="h1" gutterBottom sx={titleStyles}>
        React / Redux (with love)
      </Typography>
    </Box>
  );
}
