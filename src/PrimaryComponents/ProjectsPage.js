import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProjectDeskImg from "../SecondaryComponents/ProjectDeskImg";
import HvacIcon from "@mui/icons-material/Hvac";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

export default function ProjectsPage(props) {
  const projectData = [
    {
      image: props.Gunndesk,
      icon: HvacIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: props.Wandesk,
      icon: PointOfSaleIcon,
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: props.Ptdesk,
      icon: FitnessCenterIcon,
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {projectData.map((item) => (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "primary.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ProjectDeskImg image={item.image} />
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
        </Box>
      ))}
    </Box>
  );
}
