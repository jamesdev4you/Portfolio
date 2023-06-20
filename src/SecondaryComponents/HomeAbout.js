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
        paddingTop: { xs: "0px", md: "50px", lg: "50px" },
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
        sx={{
          fontSize: { xs: "18px", md: "20px", lg: "22px" },
          textAlign: "center",
          margin: "auto",
          width: "100%",
        }}
      >
        Welcome! I am a Web Developer specializing in making your small buisness
        have a bigger impact on the internet! I will reduce operating costs,
        widen your market and discoveribility, reduce your time and money spent
        on marketing, and increase your credibility!
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          margin: "auto",
          fontSize: { xs: "18px", md: "20px", lg: "22px" },
          width: "100%",
        }}
      >
        Through working with dozens of clients I've found ways to upgrade
        hundreds of software and media purposes to suite any company's vision! I
        will always put you first, and ensure that you make your money back by
        providing you with a long-term strategy to success!
      </Typography>
    </Box>
  );
}
