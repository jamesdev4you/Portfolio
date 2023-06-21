import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import "../index.css";

const AboutMinions = (props) => {
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
        width: { xs: "90%", sm: "70%", md: "450px", lg: "450px", xl: "450px" },
        height: {
          xs: "400px",
          sm: "450px",
          md: "450px",
          lg: "450px",
          xl: "450px",
        },
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
            width: { xs: "100%", md: "450px", lg: "450px", xl: "450px" },
            height: { xs: "400px", md: "450px", lg: "450px", xl: "450px" },
            position: "absolute",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            transition: "1.2s",
            backgroundColor: "#272727",
            marginBottom: "8px",
            padding: "15px",
          }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              fontSize: { xs: "20px", lg: "20px", xl: "36px" },
              fontFamily: "Shrikhand",
            }}
          >
            {props.title}{" "}
            <props.icon
              sx={{
                transform: {
                  xs: "scale(1.5)",
                  lg: "scale(2)",
                  xl: "scale(1.8)",
                },
                marginLeft: "15px",
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              fontSize: { xs: "17px", md: "20px", lg: "20px", xl: "20px" },
              fontFamily: "Ubuntu",
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            width: { xs: "100%", md: "450px", lg: "450px", xl: "450px" },
            height: { xs: "400px", md: "450px", lg: "450px", xl: "450px" },
            gap: { xs: "0px", lg: "30px", xl: "50px" },
          }}
          title="green iguana"
        >
          <Typography
            color="text.primary"
            sx={{
              fontSize: { xs: "30px", lg: "40px", xl: "50px" },
              textAlign: "center",
              padding: "0px",
              width: "100%",

              fontFamily: "Shrikhand",
            }}
          >
            {props.title}
          </Typography>
          <props.icon
            sx={{
              padding: "0px",
              width: { xs: "300px", md: "300px", lg: "230px", xl: "230px" },
              height: { xs: "300px", md: "300px", lg: "230px", xl: "230px" },
              margin: "0px",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AboutMinions;
