import React from "react";
import Box from "@mui/material/Box";
import git from "../Images/footergit.png";
import linkedin from "../Images/footerlinkedin.png";
import instagram from "../Images/instagram.png";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", gap: "50px" }}>
        <a
          href="https://www.linkedin.com/in/james-boyle-033ab7276/"
          target="_blank"
        >
          <img src={linkedin} style={{ width: 100, height: 100 }} />
        </a>
        <a href="https://www.instagram.com/jamesboyle813/" target="_blank">
          <img src={instagram} style={{ width: 100, height: 100 }} />
        </a>
        <a href="https://github.com/jamesdev4you" target="_blank">
          <img src={git} style={{ width: 100, height: 100 }} />
        </a>
      </Box>
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Typography
          variant="h7"
          sx={{
            margin: "auto",
            textAlign: "center",
            fontFamily: "Ubuntu",
          }}
        >
          Made by Jamesdev4you@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
