import React from "react";
import Box from "@mui/material/Box";
import HomeAbout from "../SecondaryComponents/HomeAbout";
import HomeImage from "../SecondaryComponents/HomeImage";

export default function HomePage(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "100vh", lg: "100vh" },
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        display: "flex",
        flexDirection: { xs: "column", md: "row", lg: "row" },
        gap: { xs: "30px", md: "30px", lg: "30px" },
        alignItems: { xs: "center", md: "center", lg: "center" },
        justifyContent: { xs: "start", md: "center", lg: "center" },
        padding: { xs: "100px 0px", md: "100px 0px", lg: "100px 0px" },
      }}
      ref={props.homeRef}
    >
      <HomeImage themeLight={props.themeLight} />
      <HomeAbout themeLight={props.themeLight} />
    </Box>
  );
}
