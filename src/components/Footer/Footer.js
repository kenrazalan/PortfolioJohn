import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { useStyles } from './styles';



function Footer() {
  
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <Divider />
    <Container className={classes.socialMediaIcons}>
      <a
        href="https://web.facebook.com/profile.php?id=100008276173382"
        className={classes.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FacebookIcon className={classes.FacebookIcon} />
      </a>

      <a
        href="https://www.youtube.com/channel/UCcC8hOFbh4g7p1cvYDn-Z4Q"
        className={classes.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <YoutubeIcon className={classes.YoutubeIcon} />
      </a>
    </Container>

    <Typography>johnchristian1899@gmail.com</Typography>
    <Typography>&copy; 2020 John Christian Casas</Typography>
    <h5>Designed and Developed by: John Kenneth Razalan</h5>
    
  </div>
  );
}

export default Footer;