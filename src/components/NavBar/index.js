import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime'
import { Toolbar,AppBar,IconButton,Typography,MenuItem,Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//Estilos de la Navbar
const useStyles = makeStyles(theme => ({
    navbar: {
    background:lime.A400,
    border:0,
    borderRadius:3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color:"white",
    height:48,
    justifyContent:"center",
    position:"fixed"
  },
  imagen:{
    height:45,
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

//Inicio del componente
export default function Navbar(props) {
  const classes = useStyles();//Estilos de Navbar
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);//hook
  const styles = {
    style: {
      padding: '20px',
      color:'white',    //Estilos de la Navlink
    },
    activeStyle: {
      color: 'Yellow',
    }
  }
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink exact to="/characters">
          <Typography className={classes.title} variant="h6">
            Characters
          </Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className="appbar">
          <NavLink exact to="/" edge="start">
            <img src="./home.png" className={classes.imagen} alt="rick&morty"/>
          </NavLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink {...styles} exact to="/characters">
              <Typography variant="h6">
                Characters
              </Typography>
            </NavLink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}