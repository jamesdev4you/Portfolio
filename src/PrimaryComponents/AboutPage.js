import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import WebIcon from "@mui/icons-material/Web";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AboutMinions from "../SecondaryComponents/AboutMinions";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import GoogleIcon from "@mui/icons-material/Google";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ForumIcon from "@mui/icons-material/Forum";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export default function AboutPage(props) {
  const [checked, setChecked] = React.useState(false);

  const skillsData = [
    {
      icon: InstagramIcon,
      title: "Marketing!",
      description:
        "Whether you're starting out, or needing some upgrades, I will be sure to provide you excellent online marketing. Social Media marketing allows businesses the opportunity to connect with larger audiences, providing you with the ability to expand your market extensively! You'll not only find new customers, but give current customers a way for them to support your business and expand your brand! I'll provide you with accounts, ways to create content easily, and fundamentals to grow!",
    },
    {
      icon: WebIcon,
      title: "Websites!",
      description:
        "All websites I provide are 100% custom made and are optimized to suite your vision. Whether you want a business, eCommerce, social media, educational, or landing page website I will create it! Whatever you need done will get done! This process all begins with you and your vision, and ends with a finished product. Whether you have content or not, I'll be sure to provide whatever your missing - offering writing, photographs, design, branding, and more at your discretion!",
    },
    {
      icon: OpenWithIcon,
      title: "Expansion!",
      description:
        "70% to 80% of customers in the United States connect with businesses through the internet. Through my services your business will establish itself in the market intelligently, with every step being in the right direction. By using social media marketing, website design, SEO, branding, and more I'll provide everything you need to be successful! My services are a partnership - as I want nothing more than your business to succed!",
    },
    {
      icon: GoogleIcon,
      title: "SEO!",
      description:
        "87% of consumers used Google to evaluate businesses in 2022! Search Engine Optimization(SEO) allows your website to rank higher in search results - bringing you more eyes to your business! Through my services you'll get cost-effective leads, increase brand awareness, stand out from competition, build trust, and more! Not only will I boost your SEO but I'll also build you a wonderful Google Page!",
    },
    {
      icon: AccountTreeIcon,
      title: "Strategizing!",
      description:
        "Anyone pitching fast change is lying to you. As a business owner you are already familiar with the idea that it'll take time to get the fruits of your labor. But with proper strategizing, you'll be able to reap them sooner rather than later. I'll provide you with a long-term model that'll help you grow your business organically for years to come by establishing a strong online presence through Marketing, Website design, SEO, and more!",
    },
    {
      icon: ForumIcon,
      title: "Blogs!",
      description:
        "Out of the roughly 2 Billion amount of websites on the internet, a third of them are blogs! My services capitalize on this market by using blogs to bring traffic towards your website, build an engaging audience, generate leads, and more! Although blogs are usually seen as an obscure part of the internet, they aren't! By using my services I ensure you that you'll be able to use this huge portion of the internet to your advantage!",
    },
    {
      icon: AttachEmailIcon,
      title: "Newsletters!",
      description:
        "Most successful businesses use the 70/30 rule - 70% of content provided by them are useful and educational content catered towards their audience while 30% is provided for selling. Newsletters can help fill a huge portion of this 70% by generating leads, building relationships, saving money, and modernizing your business! Through my practices you'll be sure to generate engaging content, putting yourself ahead of your competition!",
    },
    {
      icon: DesignServicesIcon,
      title: "Branding!",
      description:
        "Branding is one of the most prominent ways to generate new revenue! If you do not have a logo, or a theme of colors, I'll provide you with them! If you do, I can still be of assitance by blending your logo, marketing, and reputation into a cohesive picture that customers will resonate with! Branding supports every aspect of your business, and through my services, you'll be able to leverage all of these benefits to make you money! ",
    },
    {
      icon: SmartToyIcon,
      title: "Automation!",
      description:
        "The technological revolution of A.I. is upon us! Get ahead but using automation to immediately repond to customer service requests, automate SMS marketing messages, implement a database storing customer contact information, and building your marketing presence! Through my practices I promise to make your day-to-day tasks easier allowing you to focus on other aspects of your business! ",
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
        My Services!
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
        />
        <AboutMinions
          icon={skillsData[1].icon}
          title={skillsData[1].title}
          description={skillsData[1].description}
        />
        <AboutMinions
          icon={skillsData[2].icon}
          title={skillsData[2].title}
          description={skillsData[2].description}
        />

        <AboutMinions
          icon={skillsData[3].icon}
          title={skillsData[3].title}
          description={skillsData[3].description}
        />
        <AboutMinions
          icon={skillsData[4].icon}
          title={skillsData[4].title}
          description={skillsData[4].description}
        />
        <AboutMinions
          icon={skillsData[5].icon}
          title={skillsData[5].title}
          description={skillsData[5].description}
        />

        <AboutMinions
          icon={skillsData[6].icon}
          title={skillsData[6].title}
          description={skillsData[6].description}
        />
        <AboutMinions
          icon={skillsData[7].icon}
          title={skillsData[7].title}
          description={skillsData[7].description}
        />
        <AboutMinions
          icon={skillsData[8].icon}
          title={skillsData[8].title}
          description={skillsData[8].description}
        />
      </Box>
    </Box>
  );
}
