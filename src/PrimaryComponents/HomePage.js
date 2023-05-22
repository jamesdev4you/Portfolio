import React from "react";
import Box from "@mui/material/Box";
import HomeAbout from "../SecondaryComponents/HomeAbout";
import HomeImage from "../SecondaryComponents/HomeImage";

export default function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <HomeImage />
      <HomeAbout />
    </Box>
  );
}
