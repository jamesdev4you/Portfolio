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
      title: "Gunn HVAC",
      desc: "This website allows customers to learn about what the Gunn Brothers have to offer with an interactive homepage. Furthermore, customers can find out how much a service call will be using the custom Service Estimate tool made from Google APIs and javascript.",

      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
      website: "https://gunnbrothershvac.com/",
      repo: "https://github.com/jamesdev4you/gunnbrothersnewnew",
    },
    {
      image: props.Wandesk,
      image2: props.Wanphone,
      icon: PointOfSaleIcon,
      title: "SalesBot",
      desc: "This landing page was created during my appreticeship, and uses animations and color theory to provide a striking visual experience for possible customers to learn about what the SalesBot has to offer!",
      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
      website: "https://www.stevenreedpt.com/",
      repo: "https://github.com/jamesdev4you/StevenPersonalTraining",
    },
    {
      image: props.Ptdesk,
      image2: props.Ptphone,
      icon: FitnessCenterIcon,
      title: "Steven's PT!",
      desc: "This website allows clients to seemlessly navigate to find their personal training needs by offering a variety of plans to choose from. Client requested a google forms intergration, multiple swipers, and animations to provide a simple yet interactive experience!",
      htmlDesc: "HTML",
      htmlIcon: HTMLIcon,
      cssDesc: "CSS",
      cssIcon: CSSIcon,
      jsDesc: "Javascript",
      jsIcon: JSIcon,
      reactDesc: "React",
      reactIcon: REACTIcon,
      website: "https://github.com/jamesdev4you/puiblicsales",
      repo: "https://github.com/jamesdev4you/puiblicsales",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "100px",
        backgroundColor: props.themeLight ? "primary.light" : "dark",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          paddingTop: "100px",
          margin: "auto",
          textAlign: "center",
          fontFamily: "Shrikhand",
        }}
        ref={props.projectsRef}
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
              backgroundColor: props.themeLight ? "primary.light" : "dark",
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
                borderColor: props.themeLight ? "black" : "dark",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: props.themeLight ? "primary.main" : "#222222",
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

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "column", lg: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "5px", md: "15px", lg: "25px" },
                  width: { xs: "90%", md: "70%", lg: "70%" },
                  borderRadius: "20px",
                  margin: { xs: "10px 0px", md: "20px 0px", lg: "20px 0px" },
                  padding: "10px 30px",
                  backgroundColor: props.themeLight ? "black" : "dark",
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
                  <Typography
                    variant="h7"
                    sx={{ textAlign: "center", color: "white" }}
                  >
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
                  <Typography
                    variant="h7"
                    sx={{ textAlign: "center", color: "white" }}
                  >
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
                  <Typography
                    variant="h7"
                    sx={{ textAlign: "center", color: "white" }}
                  >
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
                  <Typography
                    variant="h7"
                    sx={{ textAlign: "center", color: "white" }}
                  >
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
                  target="_blank"
                  href={`${item.website}`}
                >
                  Live
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ padding: "5px 30px" }}
                  target="_blank"
                  href={`${item.repo}`}
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
