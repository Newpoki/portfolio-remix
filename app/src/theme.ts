import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#424242" },
    secondary: { main: "rgba(0, 0, 0, 0.54)" },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      disabled: "rgba(0, 0, 0, 0.38)",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
});

const theme = createTheme({
  ...baseTheme,
  components: {
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: baseTheme.typography.fontWeightLight,
        },
        h5: {
          fontWeight: baseTheme.typography.fontWeightLight,
        },
      },
    },
  },
});

export default theme;
