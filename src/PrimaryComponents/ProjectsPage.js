import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectDeskImg from "../SecondaryComponents/ProjectDeskImg";
import ProjectPhoneImg from "../SecondaryComponents/ProjectPhoneImg";
import HvacIcon from "@mui/icons-material/Hvac";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import HTMLIcon from "../Images/HTML5.png";
import CSSIcon from "../Images/CSS3.png";
import JSIcon from "../Images/JavaScript.png";
import REACTIcon from "../Images/React.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ProjectsPage(props) {
  const projectData = [
    {
      image: props.Gunndesk,
      image2: props.Gunnphone,
      icon: HvacIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
    },
    {
      image: props.Wandesk,
      image2: props.Wanphone,
      icon: PointOfSaleIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
    },
    {
      image: props.Ptdesk,
      image2: props.Ptphone,
      icon: FitnessCenterIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          paddingTop: "100px",
          margin: "auto",
          textAlign: "center",
          fontFamily: "Montserrat",
          textDecoration: "underline",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: { xs: "100px", md: "20px", lg: "150px" },
        }}
      >
        {projectData.map((item) => (
          <Box
            sx={{
              width: "100%",
              height: "auto",
              backgroundColor: "primary.light",
              display: "flex",
              flexDirection: { xs: "column", md: "row", lg: "row" },
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <ProjectDeskImg image={item.image} />
            <ProjectPhoneImg image={item.image2} />
            <Box
              sx={{
                width: { xs: "80%", md: "40%", lg: "40%" },
                height: "auto",
                padding: { xs: "20px", md: "30px", lg: "30px 50px" },
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
                variant="h4"
                sx={{ padding: "20px 0px", textAlign: "center" }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  paddingBottom: "10px",
                  display: { xs: "none", md: "none", lg: "inline" },
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                variant="h7"
                sx={{
                  textAlign: "center",
                  paddingBottom: "10px",
                  display: { xs: "inline", md: "inline", lg: "none" },
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  display: { xs: "none", md: "none", lg: "inline" },
                }}
              >
                {item.desc2}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "column", lg: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  border: { xs: "2px solid black", md: "none", lg: "none" },
                  gap: { xs: "5px", md: "15px", lg: "25px" },
                  width: { xs: "90%", md: "70%", lg: "70%" },
                  borderRadius: "20px",
                  margin: { xs: "10px 0px", md: "20px 0px", lg: "20px 0px" },
                  padding: "10px 0px",
                  backgroundColor: "primary.dark",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Typography variant="h7" sx={{ textAlign: "center" }}>
                    {item.htmlDesc}
                  </Typography>
                  <img
                    src={`${item.htmlIcon}`}
                    alt="HTML"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h7" sx={{ textAlign: "center" }}>
                    {item.cssDesc}
                  </Typography>
                  <img
                    src={`${item.cssIcon}`}
                    alt="HTML"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Typography variant="h7" sx={{ textAlign: "center" }}>
                    {item.jsDesc}
                  </Typography>
                  <img
                    src={`${item.jsIcon}`}
                    alt="HTML"
                    style={{ width: "25px", height: "25px" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Typography variant="h7" sx={{ textAlign: "center" }}>
                    {item.reactDesc}
                  </Typography>
                  <img
                    src={`${item.reactIcon}`}
                    alt="HTML"
                    style={{ width: "30px", height: "25px" }}
                  />
                </Box>
              </Box>
              <Stack spacing={4} direction="row" sx={{ paddingTop: "10px" }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ padding: "5px 30px" }}
                >
                  Live
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ padding: "5px 30px" }}
                >
                  Repo
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
