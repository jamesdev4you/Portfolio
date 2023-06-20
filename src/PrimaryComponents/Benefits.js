import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import "../index.css";

export default function Benefits(props) {
  const skillsData = [
    {
      icon: MeetingRoomOutlinedIcon,
      title: "Starting Out",
      price: "$1,000",
      checkmark: CheckRoundedIcon,
      itemOne: "✓ Custom Website",
      itemTwo: "✓ Branding",
      itemThree: "✓ SEO",
      itemFour: "✓ Establishing Digital Marketing",
    },
    {
      icon: HomeOutlinedIcon,
      title: "Leveling Up",
      price: "$1,500",
      itemOne: "✓ Custom Website",
      itemTwo: "✓ Branding",
      itemThree: "✓ SEO",
      itemFour: "✓ Digital Marketing",
      itemFive: "✓ Newsletters",
      itemSix: "✓ Google Business",
      itemSeven: "✓ Newsletter",
      itemEight: "✓ Blogs",
    },
    {
      icon: LocationCityOutlinedIcon,
      title: "Professional",
      price: "$2,500",
      itemOne: "✓ Custom Website",
      itemTwo: "✓ Branding",
      itemThree: "✓ SEO",
      itemFour: "✓ Digital Marketing",
      itemFive: "✓ Newsletters",
      itemSix: "✓ Google Business",
      itemSeven: "✓ Newsletter",
      itemEight: "✓ Blogs",
      itemNine: "✓ Automated E-Mail",
      itemTen: "✓ Business Automation",
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
        ref={props.benefitRef}
      >
        Pick Your Package!
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
              width: { xs: "100%", md: "40%", lg: "31%" },
              height: { xs: "auto", md: "500px", lg: "500px", xl: "500px" },
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
              <span style={{ paddingRight: "5px" }} />
              {item.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                height: "60%",
                width: "100%",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemOne}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemTwo}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemThree}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemFour}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemFive}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemSix}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemSeven}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemEight}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemNine}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "Left",
                    fontFamily: "Ubuntu",
                    width: "100%",
                  }}
                >
                  {item.itemTen}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="error"
              onClick={props.contactExecuteScroll}
              sx={{
                padding: "5px 30px",
                margin: { xs: "30px 0px", lg: "0px" },
              }}
              target="_blank"
            >
              Begin Today!
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
