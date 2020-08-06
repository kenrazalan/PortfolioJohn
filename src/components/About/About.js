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
          I Edit Photos & design Logo using Photoshop based on your demand.
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
        Hello I am John Christian Casas. I am graduated from Batangas State University.
        I Edit Photo and Design Logo using Photoshop based on what you needs. I am detail oriented person who pays attention to every small details a can make a conscious effort in every task.  
        </Typography>
        </Container>
    </Grid>
  );
}

export default About;