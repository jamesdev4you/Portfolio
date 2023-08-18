import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import '../index.css';

export default function Benefits(props) {
  const skillsData = [
    {
      icon: SportsEsportsIcon,
      title: 'eSports and Gaming',
      itemOne:
        "Playing video games has always been a huge part of my life, and as I get older I found ways to continue this passive hobby through Valorant. Currently I lead a team where I create strategies, lead practices, and win tournaments in a rapidly evolving game. At the end of the day, this is just a hobby, but it's one that is very dear to my heart!",
    },
    {
      icon: DirectionsRunIcon,
      title: 'Active Lifestyle',
      itemOne:
        'To maintain my keystone habits and live a healthy physical and mental life, I workout constantly to relieve myself from any mental and physical fatigue. By stretching, running, and lifting at least 6 days a week I find myself able to consistently provide 100% effort into anything I do!',
    },
    {
      icon: SchoolIcon,
      title: 'Chasing Education',
      itemOne:
        "After finishing my Associates degree, and teaching myself frontend development, I found a resurrgence in energy to learn as much as possible! While looking for a job I am also a full-time student at USF attempting to get a bachelors in Computer Science so that I can eventually get a Master's in Cybersecurity! ",
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: props.themeLight ? 'primary.light' : 'dark',
        paddingTop: { xs: '0px', md: '20px', lg: '0px' },
      }}
    >
      <Typography
        variant='h2'
        sx={{
          paddingTop: '100px',
          paddingBottom: { xs: '50px', md: '20px', lg: '0px' },
          margin: 'auto',
          textAlign: 'center',
          fontFamily: 'Ubuntu',
        }}
        ref={props.aboutRef}
      >
        Get to know me!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '50px',
          padding: { xs: '5px', md: '20px 0px', lg: '70px 50px' },
        }}
      >
        {skillsData.map((item) => (
          <Box
            sx={{
              width: { xs: '100%', md: '40%', lg: '31%' },
              height: { xs: 'auto', md: '500px', lg: '500px', xl: '500px' },
              padding: { xs: '15px', md: '30px', lg: '50px' },
              margin: { xs: '15px', md: '0px', lg: '0px' },
              border: '5px solid',
              borderColor: props.themeLight ? 'black' : 'dark',
              borderRadius: '25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: props.themeLight ? 'white' : '#222222',
            }}
          >
            <motion.div
              animate={{ rotate: [10, -10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <item.icon
                sx={{
                  width: '25%',
                  height: '25%',
                  minWidth: '80px',
                  minHeight: '80px',
                  color: props.themeLight ? 'black' : 'dark',
                }}
              />
            </motion.div>
            <Typography
              variant='h4'
              sx={{
                padding: '20px 0px',
                textAlign: 'center',
                fontFamily: 'Shrikhand',
              }}
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                height: '60%',
                width: '100%',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-around',
              }}
            >
              <Box>
                <Typography
                  variant='h6'
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Ubuntu',
                    width: '100%',
                  }}
                >
                  {item.itemOne}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
