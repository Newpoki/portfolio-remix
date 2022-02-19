import { Typography, Theme } from "@mui/material";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="a"
        variant="h5"
        href={`mailto:savellijason@gmail.com`}
        sx={{ mb: 1, color: (theme: Theme) => theme.palette.primary.main }}
      >
        savellijason@gmail.com
      </Typography>

      <Typography
        component="a"
        variant="h5"
        href={`tel:+33659416819`}
        sx={{ color: (theme: Theme) => theme.palette.primary.main }}
      >
        06 59 41 68 19
      </Typography>
    </Box>
  );
};

export default Contact;
