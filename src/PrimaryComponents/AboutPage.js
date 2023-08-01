import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import IconRe from "../Images/JavaScript.png";
import IconHTML from "../Images/HTML5.png";
import IconCSS from "../Images/CSS3.png";
import IconReact from "../Images/reactimg.png";
import IconLiquid from "../Images/liquid.png";
import IconGit from "../Images/github.png";
import IconMui from "../Images/mui.png";
import IconFramer from "../Images/framer.png";
import IconGoogle from "../Images/google.png";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AboutMinions from "../SecondaryComponents/AboutMinions";
import JavascriptIcon from "@mui/icons-material/Javascript";
import GoogleIcon from "@mui/icons-material/Google";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ForumIcon from "@mui/icons-material/Forum";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export default function AboutPage(props) {
  const [checked, setChecked] = React.useState(false);

  const skillsData = [
    {
      icon: IconHTML,
      title: "HTML",
      description:
        "HTML (HyperText Markup Language) is the standard markup language used for creating and structuring content on websites. It consists of a series of tags and elements that define the various components of a webpage, such as headings, paragraphs, images, and links. By first learning HTML, I was able to craft the layout and presentation of web pages, making it a core skill for me.",
    },
    {
      icon: IconCSS,
      title: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a powerful language used in web development to control the visual appearance and layout of HTML elements on a webpage. It enables me to apply colors, fonts, spacing, and other stylistic properties to create a visually appealing and consistent user experience. By separating the presentation layer from the content, CSS allows for easy and efficient design changes across multiple pages, making it a prominent tool for my web design.",
    },
    {
      icon: IconRe,
      title: "JavaScript",
      description:
        "JavaScript is a versatile and widely-used programming language that enables dynamic and interactive elements on websites. As a client-side scripting language, it runs directly within a web browser and allows me to add functionality, user interactions, and modify the content of web pages in real-time. With its broad adoption, JavaScript has become a core component of every web page I create!",
    },
    {
      icon: IconReact,
      title: "React",
      description:
        "React is a popular and powerful JavaScript library for building user interfaces and front-end applications. Developed by Facebook, it allows developers to create reusable components and efficiently manage the state of web pages, resulting in faster and more responsive user experiences. With its declarative and component-based approach, React has revolutionized web development, making it a valuable asset for me to build scalable and maintainable web applications.",
    },
    {
      icon: IconLiquid,
      title: "Liquid",
      description:
        "Before learning JavaScript, I learned Liquid, which is a Javascript and Component based library for creating modern state of the art eCommerce pages on Shopify. Although similar to React,  enables developers to build dynamic and personalized web templates by embedding variables, filters, and control structures within markup files. Overall it is a simple, yet secure way to create eCommerce webpages on Shopify. ",
    },
    {
      icon: IconGit,
      title: "Git",
      description:
        "Git is a widely-used distributed version control system that allows developers to track changes in their codebase over time. Developed by Linus Torvalds, Git provides a reliable and collaborative environment for managing code repositories, enabling multiple developers to work simultaneously on projects without conflicts. With its powerful branching and merging capabilities, Git empowers teams to efficiently collaborate and present programs and web pages!",
    },
    {
      icon: IconMui,
      title: "MUI",
      description:
        "Mui (Material-UI) is a popular and comprehensive open-source library that provides a set of ready-to-use React components following Google's Material Design guidelines. With Mui, developers can quickly create modern and visually appealing user interfaces for web applications. Its customizable and responsive components, along with a vast collection of pre-designed elements, make Mui a valuable asset for building intuitive and aesthetically pleasing user experiences.",
    },
    {
      icon: IconFramer,
      title: "Framer Motion",
      description:
        "Framer Motion is a feature-rich and user-friendly animation library for React applications. It empowers developers to effortlessly create stunning and fluid animations with a declarative API, providing a delightful user experience. With its support for keyframes, spring physics, and gesture-based interactions, Framer Motion is a powerful tool that streamlines the process of adding dynamic and engaging animations to web projects.",
    },
    {
      icon: IconGoogle,
      title: "Google API",
      description:
        "The Google Maps API is a powerful set of tools and services that allows developers to integrate dynamic and interactive maps into their web or mobile applications. With extensive documentation and easy-to-use interfaces, developers can display location-based data, create custom map markers, and implement geolocation features seamlessly. ",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        paddingTop: { xs: "0px", md: "0px", lg: "0px" },
      }}
    >
      <Typography
        sx={{
          paddingTop: "100px",
          paddingBottom: { xs: "50px", md: "20px", lg: "0px" },
          margin: "auto",
          fontSize: { xs: "50px", md: "60px", lg: "50px" },
          textAlign: "center",
          fontFamily: "Ubuntu",
        }}
        ref={props.aboutRef}
      >
        My Skills!
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
        <AboutMinions
          icon={skillsData[0].icon}
          title={skillsData[0].title}
          description={skillsData[0].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[1].icon}
          title={skillsData[1].title}
          description={skillsData[1].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[2].icon}
          title={skillsData[2].title}
          description={skillsData[2].description}
          themeLight={props.themeLight}
        />

        <AboutMinions
          icon={skillsData[3].icon}
          title={skillsData[3].title}
          description={skillsData[3].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[4].icon}
          title={skillsData[4].title}
          description={skillsData[4].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[5].icon}
          title={skillsData[5].title}
          description={skillsData[5].description}
          themeLight={props.themeLight}
        />

        <AboutMinions
          icon={skillsData[6].icon}
          title={skillsData[6].title}
          description={skillsData[6].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[7].icon}
          title={skillsData[7].title}
          description={skillsData[7].description}
          themeLight={props.themeLight}
        />
        <AboutMinions
          icon={skillsData[8].icon}
          title={skillsData[8].title}
          description={skillsData[8].description}
          themeLight={props.themeLight}
        />
      </Box>
    </Box>
  );
}
