import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import "../index.css";

const drawerWidth = 240;
const navItems = ["Home", "Skills", "Projects", "Contact"];

export default function Menu(props) {
  const { window } = props; //need help understanding
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "primary.main" }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px",
        }}
      >
        <IconButton aria-label="open drawer" edge="start">
          <CloseIcon style={{ fontSize: "inherit" }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Montserrat",
            margin: "15px",
            paddingRight: "35px",
          }}
        >
          James Boyle
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "primary.main" }} />
      <List sx={{ backgroundColor: "primary.main" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                sx={{ fontFamily: "Montserrat", color: "text.primary" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", margin: "auto" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "text.primary",
              fontFamily: "Montserrat",
            }}
          >
            James Boyle
          </Typography>
          <Switch />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "text.primary",
                  fontFamily: "Montserrat",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
