import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function AboutPage() {
  const skillsData = [
    {
      icon: AutoStoriesIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: SportsEsportsIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: FavoriteIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "primary.light",
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
        }}
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
              height: "auto",
              padding: { xs: "15px", md: "30px", lg: "50px" },
              margin: { xs: "15px", md: "0px", lg: "0px" },
              border: "5px solid",
              borderColor: "error.light",
              borderRadius: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "primary.main",
            }}
          >
            <item.icon
              sx={{
                width: "25%",
                height: "25%",
                minWidth: "80px",
                minHeight: "80px",
                color: "error.light",
              }}
            />
            <Typography
              variant="h3"
              sx={{ padding: "20px 0px", textAlign: "center" }}
            >
              {item.title}
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
