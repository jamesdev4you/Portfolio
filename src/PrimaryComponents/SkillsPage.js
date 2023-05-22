import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Scale } from "@mui/icons-material";

export default function SkillsPage() {
  const skillsData = [
    {
      icon: AutoStoriesIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: SportsEsportsIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: FavoriteIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
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
            height: "auto",
            padding: { xs: "20px", md: "30px", lg: "50px" },
            border: "5px solid black",
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
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
            }}
          />
          <Typography
            variant="h2"
            sx={{ padding: "20px 0px", textAlign: "center" }}
          >
            {item.title}
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {item.desc}
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {item.desc2}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
