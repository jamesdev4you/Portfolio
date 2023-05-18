import React from "react";
import Menu from "./PrimaryComponents/Menu";
import HomePage from "./PrimaryComponents/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
