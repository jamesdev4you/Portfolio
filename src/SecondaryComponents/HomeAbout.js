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
        Welcome to my portfolio! I am looking to transition from working as an apprentice and a freelance Front End Developer to a Jr. Front End Developer for your company! Currently, I specialize in HTML, CSS, JavaScript, and React. 
      </Typography>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          margin: "auto",

          width: "90%",
        }}
      >
        From working as Kitchen Manager at Chipotle, to now bringing my clients ideas to life, I have found a passion for Front End Development and hope to bring my communication skills, reliability, and creativity to life in a long-term career at your company! 
      </Typography>
    </Box>
  );
}
