import React from "react";
import Box from "@mui/material/Box";
import HomeAbout from "../SecondaryComponents/HomeAbout";
import HomeImage from "../SecondaryComponents/HomeImage";

export default function HomePage(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        display: "flex",
        gap: "30px",
        alignItems: { xs: "start", md: "space-around", lg: "center" },
        justifyContent: "center",
        padding: { xs: "100px 0px", md: "100px 0px", lg: "100px 0px" },
      }}
      ref={props.homeRef}
    >
      <HomeImage themeLight={props.themeLight} />
      <HomeAbout themeLight={props.themeLight} />
    </Box>
  );
}
