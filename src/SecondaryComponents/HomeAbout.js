import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomeAbout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "80%", md: "80%", lg: "35%" },
        gap: "10px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        James Boyle
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "auto",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim
        veniam quis.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "auto",
          textAlign: "center",
          display: { xs: "none", md: "none", lg: "flex" },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris Ut enim ad minim
        veniam quis.
      </Typography>
    </Box>
  );
}
