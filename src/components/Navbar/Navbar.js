import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
import MailIcon from '@material-ui/icons/Mail'

import WorkIcon from '@material-ui/icons/Work'





import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../img/My LOGO.png'
import {useStyles} from './styles';





  const navigationItems = [
    {
      path: '/',
      icon: <HomeIcon />,
      text: 'Home'
    },
    {
      path: '/about',
      icon: <HelpIcon />,
      text: 'About'
    },
    {
      path: '/projects',
      icon: <WorkIcon />,
      text: 'Works'
    },
    {
      path: '/contact',
      icon: <MailIcon />,
      text: 'Contact'
    }
  ]


function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        drawerOpen: false
      })
    
      const toggleDrawer = (open) => (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return
        }
    
        setState({ ...state, drawerOpen: open })
      }
         
  return (
 
      <div>
    <AppBar position="static" className={classes.bar}>
        <Toolbar>
        
          
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkTitle}>
            <img className={classes.logo} src={logo}/>
            </Link>
          </Typography>
          <div className={classes.navigationItems}>
              {navigationItems.map((item,key)=>(
                  <Button to={item.path} component={Link} key={key} className={classes.buttons} color="inherit" key={key}>{item.text}</Button>
             ) )}
          </div>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.navigationMenu}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    
    <Drawer
        anchor="right"
        open={state.drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.drawer}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navigationItems.map((item, i) => (
              <Link className={classes.link} to={item.path} key={i}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
             </Link>
            ))}
          </List>
        </div>
      </Drawer>
      </div>
  );
}

export default Navbar;