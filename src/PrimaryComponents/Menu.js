import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import '../index.css';

const drawerWidth = 240;

export default function Menu(props) {
  const navItems = [
    { name: 'Home', link: props.homeExecuteScroll },
    { name: 'Skills', link: props.skillsExecuteScroll },
    { name: 'About', link: props.aboutExecuteScroll },
    { name: 'Projects', link: props.projectsExecuteScroll },
    { name: 'Contact', link: props.contactExecuteScroll },
  ];

  const { window } = props; //need help understanding
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: props.themeLight ? 'primary.light' : 'dark',
      }}
    >
      {' '}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0px',
          backgroundColor: props.themeLight ? 'primary.light' : 'dark',
        }}
      >
        <IconButton aria-label='open drawer' edge='start'>
          <CloseIcon style={{ fontSize: 'inherit' }} />
        </IconButton>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'Montserrat',
            margin: '15px',
            paddingRight: '35px',
          }}
        >
          James Boyle
        </Typography>
      </Box>
      <Divider
        sx={{ backgroundColor: props.themeLight ? 'primary.light' : 'dark' }}
      />
      <List
        sx={{ backgroundColor: props.themeLight ? 'primary.light' : 'dark' }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={item.link}>
              <ListItemText
                primary={item.name}
                sx={{ fontFamily: 'Montserrat', color: 'text.primary' }}
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
    <Box sx={{ display: 'flex', margin: 'auto' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: 'text.primary',
              fontFamily: 'Montserrat',
            }}
          >
            James Boyle
          </Typography>
          <Switch
            checked={props.checked}
            onClick={props.handleThemeChange}
            sx={{
              color: 'primary.light',
            }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'text.primary',
                  fontFamily: 'Montserrat',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
                onClick={item.link}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: props.themeLight ? 'primary.light' : 'dark',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
