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
        width: { xs: "80%", md: "80%", lg: "35%" },
        paddingTop: { xs: "100px", md: "100px", lg: "100px" },
        gap: "10px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${James})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: "250px", md: "250px", lg: "300px" },
          width: { xs: "250px", md: "250px", lg: "300px" },
          borderRadius: "50%",
          border: "5px solid",
          borderColor: "props.themeLight ? primary.main : dark",
          margin: "auto",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          margin: "auto",
          textAlign: "center",
          fontFamily: "Shrikhand",
        }}
      >
        James Boyle
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "auto",

          width: "90%",
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

          width: "90%",
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
