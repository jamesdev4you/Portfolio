import React from "react";
import Sun from "../Images/sun.png";
import Box from "@mui/material/Box";

export default function HomeImage() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "none", lg: "flex" },
        flexDirection: "column",
        width: "40%",
      }}
    >
      <img src={`${Sun}?w=164&h=164&fit=crop&auto=format`} alt="Sun" />
    </Box>
  );
}
