import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import { motion } from "framer-motion";

export default function AboutPage(props) {
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
        {skillsData.map((item) => (
          <Box
            sx={{
              width: { xs: "100%", md: "40%", lg: "30%" },
              height: "500px",
              padding: { xs: "15px", md: "30px", lg: "50px" },
              margin: { xs: "15px", md: "0px", lg: "0px" },
              border: "5px solid",
              borderColor: props.themeLight ? "black" : "dark",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: props.themeLight ? "primary.main" : "#222222",
            }}
          >
            <motion.div
              animate={{ rotate: [10, -10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <item.icon
                sx={{
                  width: "25%",
                  height: "25%",
                  minWidth: "80px",
                  minHeight: "80px",
                  color: props.themeLight ? "black" : "dark",
                }}
              />
            </motion.div>
            <Typography
              variant="h4"
              sx={{
                padding: "20px 0px",
                textAlign: "center",
                fontFamily: "Shrikhand",
              }}
            >
              {item.title}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
