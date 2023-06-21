import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import "../index.css";

const AboutMinions = () => {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <Card
      sx={{
        width: { xs: "250px", lg: "350px", xl: "450px" },
        height: { xs: "250px", lg: "350px", xl: "450px" },
        borderRadius: "15px",
        border: "3px solid white",
      }}
    >
      <CardActionArea
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        disableRipple
      >
        <CardContent
          sx={{
            top: isHovered ? "0%" : "-200%",
            borderRadius: "15px",
            width: { xs: "250px", lg: "350px", xl: "450px" },
            height: { xs: "250px", lg: "350px", xl: "450px" },
            position: "absolute",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "2s",
            backgroundColor: "black",
            marginBottom: "8px",
          }}
        >
          <Typography variant="body1" color="text.primary">
            More information...
          </Typography>
          <Typography variant="body1" color="text.primary">
            Description of my cool projects!
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "250px", lg: "350px", xl: "450px" },
            height: { xs: "250px", lg: "350px", xl: "450px" },
            gap: { xs: "0px", lg: "30px", xl: "50px" },
          }}
          title="green iguana"
        >
          <Typography
            color="text.primary"
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { xs: "30px", lg: "40px", xl: "50px" },
              textAlign: "center",
              padding: "0px",
              width: "100%",
              height: "10%",
              fontFamily: "Shrikhand",
            }}
          >
            Social Media
          </Typography>
          <WebIcon
            sx={{
              padding: "0px",
              width: "200px",
              height: "200px",
              margin: "0px",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AboutMinions;
