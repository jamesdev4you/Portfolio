import React from "react";
import Box from "@mui/material/Box";
import HomeAbout from "../SecondaryComponents/HomeAbout";
import HomeImage from "../SecondaryComponents/HomeImage";

export default function HomePage(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        display: "flex",
        alignItems: { xs: "start", md: "space-around", lg: "space-around" },
        justifyContent: "space-around",
        padding: { xs: "100px 0px", md: "100px 0px", lg: "100px 0px" },
      }}
      ref={props.homeRef}
    >
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
        }}
      >
        <HomeImage themeLight={props.themeLight} />
      </Box>
      <HomeAbout themeLight={props.themeLight} />
    </Box>
  );
}
