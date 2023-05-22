import React from "react";
import Menu from "./PrimaryComponents/Menu";
import HomePage from "./PrimaryComponents/HomePage";
import SkillsPage from "./PrimaryComponents/SkillsPage";
import ProjectsPage from "./PrimaryComponents/ProjectsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Montserrat from "./Fonts/Montserrat-VariableFont_wght.ttf";
import Wandesk from "./Images/wandesk.png";
import Ptdesk from "./Images/ptdesk.png";
import Gunndesk from "./Images/gunndesk.png";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#65cde7",
    },
    secondary: {
      main: "#f50057",
    },
    typography: {
      fontFamily: "Montserrat",
    },
    error: {
      main: "#FFC536",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face{
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local('Montserrat-VariableFont'), url(${Montserrat}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }`,
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: "h2",
            h2: "h3",
            h3: "h4",
            h4: "h5",
            h5: "h6",
            h6: "h6",
            subtitle1: "p",
            subtitle2: "p",
            body1: "span",
            body2: "span",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />
      <HomePage />
      <SkillsPage />
      <ProjectsPage Gunndesk={Gunndesk} Ptdesk={Ptdesk} Wandesk={Wandesk} />
    </ThemeProvider>
  );
}

export default App;
