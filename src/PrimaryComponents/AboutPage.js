import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

export default function AboutPage(props) {
  const skillsData = [
    {
      icon: AutoStoriesIcon,
      title: "Curiosity",
      desc: "Ever since I've been around, I've yearned to learn new things. Currently I have an Associates degree, and am chasing after a masters in Cyber Security at UCF. Furthermore, I am always learning and mastering new skills in Web Development.",
    },
    {
      icon: SportsEsportsIcon,
      title: "Geeky",
      desc: "When I'm not working out, learning, or sleeping, I am geeking. From playing chess online, to obsessing over Jurassic Park, I will always have my heart open to geeking out over the newest nerdy thing I can get my hands or eyes on.",
    },
    {
      icon: FavoriteIcon,
      title: "Passionate",
      desc: "No matter what I do in life, it will filled with compassion and love. I always strive to make sure that the people around me have their needs met through my commitment, hard work, and drive to always pour every ounce of my heart into what I do.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
        paddingTop: { xs: "200px", md: "20px", lg: "0px" },
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
        About Me
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
