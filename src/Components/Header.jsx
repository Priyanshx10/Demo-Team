import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundImage: 'url("https://via.placeholder.com/1500")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: '2rem',
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#FFF',
    color: '#C71585',
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className='flex justify-evenly'>
          <div className={classes.navLinks}>
            <Typography variant="button" color="black">Despre noi</Typography>
            <Typography variant="button" color="black">Produse</Typography>
            <Typography variant="button" color="black">Livrare</Typography>
            <Typography variant="button" color="black">Contacte</Typography>
          </div>
          <div>
            <img src='public\Logo.png' alt='logo'/>
          </div>
          <IconButton color="black">
            <PhoneIcon />
            <Typography variant="button" color="black"> + (373) 79 812 818</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  );
};

export default Header;
