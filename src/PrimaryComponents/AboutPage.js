import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import AboutMinions from "../SecondaryComponents/AboutMinions";

export default function AboutPage(props) {
  const [checked, setChecked] = React.useState(false);

  const skillsData = [
    {
      icon: LocalConvenienceStoreIcon,
      title: "Media",
      desc: "Providing 24/7 marketing is what I do! Through websites, social medias, and content creation I'll be sure that your community is always up to date with what you're up to! This makes up a huge portion of creating a long-term strategy that ensures money going towards your company!",
    },
    {
      icon: WebIcon,
      title: "Websites",
      desc: "I create fantasic modern website suiting your company's logo, design, and services! If you don't have any logo's or designs don't worry! As I also can provide these too! Furthermore through learning about your company I will add content to your website - so don't worry about hiring a content writer!",
    },
    {
      icon: FavoriteIcon,
      title: "Passionate",
      desc: "No matter what I do in life, it will be driven by passion. I always strive to make sure that the people around me have their needs met through my commitment, hard work, and drive to always pour every ounce of my heart into what I do. I'm always one phone call away from providing you excellent service!",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        paddingTop: { xs: "0px", md: "20px", lg: "0px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          paddingTop: "100px",
          paddingBottom: { xs: "50px", md: "20px", lg: "0px" },
          margin: "auto",
          textAlign: "center",
          fontFamily: "Shrikhand",
        }}
        ref={props.aboutRef}
      >
        What I can provide for you!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "50px",
          padding: { xs: "5px", md: "20px 0px", lg: "70px 50px" },
        }}
      >
        <AboutMinions />
        <AboutMinions />
        <AboutMinions />

        <AboutMinions />
        <AboutMinions />
        <AboutMinions />

        <AboutMinions />
        <AboutMinions />
        <AboutMinions />
      </Box>
    </Box>
  );
}
