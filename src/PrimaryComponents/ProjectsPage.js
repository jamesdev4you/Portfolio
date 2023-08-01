import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectDeskImg from "../SecondaryComponents/ProjectDeskImg";
import ProjectPhoneImg from "../SecondaryComponents/ProjectPhoneImg";
import HvacIcon from "@mui/icons-material/Hvac";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Gunn from "../Images/thegunnbrothers.jpg";
import Edvania from "../Images/edvania.jpg";
import Wan from "../Images/wan.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ProjectsPage(props) {
  const projectData = [
    {
      image: props.Gunndesk,
      image2: props.Gunnphone,
      icon: HvacIcon,
      title: "Gunn HVAC",
      desc: "The Gunn Brothers were having issues connecting with clients online due to not having a website. Not only did I provide them with a website, but I established ways to stedily increse their SEO retention over time. Furthermore, I provided them with content, and a way for customers to find out how much a service estimate would be. Moreso, I gave them a way for users to contact them, and ensured that every portion of the website linked the customer towards calling them.",
      website: "https://www.gunnbrothershvac.com/",
      repo: "https://github.com/jamesdev4you/gunnbrothersnewnew",
      person: Gunn,
      testimonial:
        "❝I was amazed by how much James cared about our business! This website not only made us thousands of dollars, but it also established us as a professional business! We can't recommend him enough!❞ ",
      rating: "⭐⭐⭐⭐⭐",
      name: "James Boyle",
    },
    {
      image: props.Wandesk,
      image2: props.Wanphone,
      icon: PointOfSaleIcon,
      title: "Chariot AI",
      desc: "This landing page was created during my appreticeship, and uses animations and color theory to provide a striking visual experience for possible customers to learn about what the Chariot AI has to offer!",
      website: "https://www.chariotai.us/",
      repo: "https://github.com/jamesdev4you/puiblicsales",
      person: Wan,
      testimonial:
        "❝I gave James this project towards the end of his appreticeship as I believed he was ready for it. Not only did he complete it quickly, but managed to exceed all of my expectations!❞ ",
      rating: "⭐⭐⭐⭐⭐",
      name: "James Boyle",
    },
    {
      image: props.Ptdesk,
      image2: props.Ptphone,
      icon: FitnessCenterIcon,
      title: "Brazilian Fitness",
      desc: "This website allows clients to seemlessly navigate to find their personal training needs by offering a variety of plans to choose from. From not having a website, to having one that allows users to pay and schedule a future training session has made Edvania's business excel!",
      website: "https://www.brazilianfitness.us/",
      repo: "https://github.com/jamesdev4you/newpersonaltraining",
      person: Edvania,
      testimonial:
        "❝Just as I was thinking about creating a website, James came to me asking if I needed one. He was an Angel! He made me an amazing website that seemlessly intregrated new customers into my already busy calendar!❞ ",
      rating: "⭐⭐⭐⭐⭐",
      name: "James Boyle",
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
          padding: "100px 0px",
          margin: "auto",
          textAlign: "center",
          fontFamily: "Ubuntu",
        }}
        ref={props.projectsRef}
      >
        My Live Projects!
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
                backgroundColor: props.themeLight ? "white" : "#222222",
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

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "column", lg: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: "5px", md: "15px", lg: "15px" },
                  width: { xs: "90%", md: "70%", lg: "100%" },
                  borderRadius: "20px",
                  margin: { xs: "10px 0px", md: "20px 0px", lg: "20px 0px" },
                  padding: "10px",
                  backgroundColor: props.themeLight ? "white" : "dark",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                    backgroundImage: `url(${item.person})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    border: "2px solid",
                    borderColor: props.themeLight ? "black" : "error.light",
                    marginBottom: "20px",
                  }}
                ></Box>
                <Box sx={{ width: { xs: "100%", md: "70%", lg: "70" } }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",

                      color: props.themeLight ? "black" : "white",
                    }}
                  >
                    {item.testimonial}
                  </Typography>
                </Box>
              </Box>
              <Stack spacing={4} direction="row" sx={{ paddingTop: "10px" }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    padding: "5px 30px",
                  }}
                  target="_blank"
                  href={`${item.website}`}
                >
                  Live
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    padding: "5px 30px",
                  }}
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
