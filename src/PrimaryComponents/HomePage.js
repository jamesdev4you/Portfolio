import React from "react";
import Box from "@mui/material/Box";
import HomeAbout from "../SecondaryComponents/HomeAbout";
import HomeImage from "../SecondaryComponents/HomeImage";

export default function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: { xs: "start", md: "space-around", lg: "space-around" },
        justifyContent: "space-around",
        paddingTop: { xs: "100px", md: "100px", lg: "100px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
        }}
      >
        <HomeImage />
      </Box>
      <HomeAbout />
    </Box>
  );
}
