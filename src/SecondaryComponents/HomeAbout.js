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
        alignItems: "left",
        justifyContent: "center",
        height: "auto",
        width: { xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "43%" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: { xs: "center", sm: "center", lg: "left", xl: "left" },
          fontFamily: "Shrikhand",
          fontSize: {
            xs: "30px",
            sm: "40px",
            md: "40px",
            lg: "50px",
            xl: "60px",
          },
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
          textAlign: { xs: "center", sm: "center", lg: "left", xl: "left" },
          fontFamily: "Shrikhand",
          fontSize: {
            xs: "30px",
            sm: "40px",
            md: "40px",
            lg: "50px",
            xl: "60px",
          },
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
