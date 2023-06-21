import React, { useRef } from "react";
import Menu from "./PrimaryComponents/Menu";
import HomePage from "./PrimaryComponents/HomePage";
import AboutPage from "./PrimaryComponents/AboutPage";
import Benefits from "./PrimaryComponents/Benefits";
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
  const [themeLight, setThemeType] = useState(false);
  const theme = createTheme({
    components: {
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            transition: "1s ease all",
          },
          focusHighlight: {
            background: "transparent",
            pointerEvents: "none",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#ccc",
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: "#f2ff00",
            },
            "&.MuiSlider-rail": {
              backgroundColor: "red",
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
        main: "#1D9AB8",
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
    },
  });
  function handleThemeChange() {
    setThemeType(!themeLight);
  }

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const homeExecuteScroll = () => homeRef.current.scrollIntoView();
  const aboutExecuteScroll = () => aboutRef.current.scrollIntoView();
  const benefitExecuteScroll = () => benefitRef.current.scrollIntoView();
  const projectsExecuteScroll = () => projectsRef.current.scrollIntoView();
  const contactExecuteScroll = () => contactRef.current.scrollIntoView();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Menu
        handleThemeChange={handleThemeChange}
        checked={themeLight}
        homeExecuteScroll={homeExecuteScroll}
        aboutExecuteScroll={aboutExecuteScroll}
        projectsExecuteScroll={projectsExecuteScroll}
        contactExecuteScroll={contactExecuteScroll}
      />
      <HomePage themeLight={themeLight} homeRef={homeRef} />
      <AboutPage themeLight={themeLight} aboutRef={aboutRef} />
      <Benefits
        themeLight={themeLight}
        aboutRef={benefitRef}
        contactExecuteScroll={contactExecuteScroll}
      />
      <ProjectsPage
        themeLight={themeLight}
        projectsRef={projectsRef}
        Gunndesk={Gunndesk}
        Gunnphone={Gunnphone}
        Ptdesk={Ptdesk}
        Ptphone={Ptphone}
        Wandesk={Wandesk}
        Wanphone={Wanphone}
      />
      <ContactPage themeLight={themeLight} contactRef={contactRef} />
    </ThemeProvider>
  );
}

export default App;
