import React from "react";
import Menu from "./PrimaryComponents/Menu";
import HomePage from "./PrimaryComponents/HomePage";
import AboutPage from "./PrimaryComponents/AboutPage";
import ProjectsPage from "./PrimaryComponents/ProjectsPage";
import ContactPage from "./PrimaryComponents/ContactPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Montserrat from "./Fonts/Montserrat-VariableFont_wght.ttf";
import Wandesk from "./Images/wandesk.png";
import Wanphone from "./Images/wanphone.png";
import Ptdesk from "./Images/ptdesk.png";
import Ptphone from "./Images/ptphone.png";
import Gunndesk from "./Images/gunndesk.png";
import Gunnphone from "./Images/gunnphone.png";
import { useState } from "react";

function App() {
  const [themeLight, setThemeType] = useState(true);
  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#ccc",
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: "#f2ff00",
            },
          },
          track: {
            opacity: 0.2,
            backgroundColor: "#fff",
            ".Mui-checked.Mui-checked + &": {
              opacity: 0.7,
              backgroundColor: "#fff",
            },
          },
        },
      },
    },
    palette: {
      mode: themeLight ? "light" : "dark",
      primary: {
        main: "#65cde7",
      },
      secondary: {
        main: "#f50057",
      },
      typography: {
        fontFamily: ["Montserrat", "Shrikhand"].join(","),
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
  function handleThemeChange() {
    setThemeType(!themeLight);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Menu handleThemeChange={handleThemeChange} checked={themeLight} />
      <HomePage themeLight={themeLight} />
      <AboutPage themeLight={themeLight} />
      <ProjectsPage
        themeLight={themeLight}
        Gunndesk={Gunndesk}
        Gunnphone={Gunnphone}
        Ptdesk={Ptdesk}
        Ptphone={Ptphone}
        Wandesk={Wandesk}
        Wanphone={Wanphone}
      />
      <ContactPage themeLight={themeLight} />
    </ThemeProvider>
  );
}

export default App;
