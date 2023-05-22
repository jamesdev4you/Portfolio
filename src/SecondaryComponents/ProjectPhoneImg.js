import React from "react";
import Box from "@mui/material/Box";

export default function ProjectPhoneImg(props) {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex", lg: "none" },
        flexDirection: "column",
        width: { xs: "90%", md: "40%", lg: "none" },
      }}
    >
      <img src={`${props.image}?w=164&h=164&fit=crop&auto=format`} alt="Sun" />
    </Box>
  );
}
