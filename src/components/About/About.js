import React, { useContext } from "react";
import { Grid, Typography,Container } from "@material-ui/core";
import { useStyles } from './styles'
import { Link } from 'react-router-dom'
import {PortfolioButton} from '../portfolio-button/portfolio-button';
import pic from '../img/pic.jpg';

 function About() {
    const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.imageContainer}
    >
      <Grid item xs={12} sm={6} className={classes.heroContent}>
        <h1 className={classes.name}>Hi, I'm John Christian</h1>
        <h3 className={classes.describe}>
          I design beautiful websites & mobile apps that modern trends demand
        </h3>
        <Link className={classes.link} to="/contact">
          <PortfolioButton>Contact Me</PortfolioButton>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.heroImage}>
        <div className={classes.transition}>
          <img className={classes.photo} src={pic} />
          <div className={classes.photoBg}></div>
        </div>
      </Grid>
      <Container className={classes.contain}>
      <Typography className={classes.h3} variant="h3">About Me</Typography>
        <Typography className={classes.paragraph} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Container>
    </Grid>
  );
}

export default About;