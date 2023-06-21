import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import James from "../Images/james.jpg";

export default function HomeAbout(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: { xs: "80%", md: "80%", lg: "40%" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontFamily: "Shrikhand",
          fontSize: { xs: "18px", md: "20px", lg: "60px" },
          color: props.themeLight ? "black" : "white",
        }}
      >
        {props.themeLight ? "Reaching new " : "Skip working "}
        <span style={{ color: props.themeLight ? "#FFC536" : "#0000b2" }}>
          {props.themeLight ? "heights" : "nights"}
        </span>
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontFamily: "Shrikhand",
          fontSize: { xs: "18px", md: "20px", lg: "60px" },
        }}
      >
        using{" "}
        <span style={{ color: props.themeLight ? "#4A70C6" : "gold" }}>
          Websites!
        </span>
      </Typography>
    </Box>
  );
}
