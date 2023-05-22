import React from "react";
import Box from "@mui/material/Box";

export default function ProjectDeskImg(props) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "none", lg: "flex" },
        flexDirection: "column",
        width: "40%",
      }}
    >
      <img src={`${props.image}?w=164&h=164&fit=crop&auto=format`} alt="Sun" />
    </Box>
  );
}
