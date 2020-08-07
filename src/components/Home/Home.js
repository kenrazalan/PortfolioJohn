import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {PortfolioButton} from '../portfolio-button/portfolio-button';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.css";
import {ThemeContext} from '../../context/DataProvider';
import { useStyles } from './style'
import { Grid } from '@material-ui/core';
import pic from '../img/pic.jpg';



function Home() {
  const data = useContext(ThemeContext);
    // const img = data.slice(1);

    // const img2 = img.map(li=>(
    //   li.image
    // ))







    const classes = useStyles();
    const img = data.slice(1).map(li=>(
      <div className={classes.carousel}>
        
      <img className={classes.caImage} src={li.image} />
      <p className={li.title}>Legend 1</p>
      </div>
    ))
  return (
    <div>
        
      
      <Grid container spacing={3} direction="column"  alignItems="center" justify="center" className={classes.imageContainer}>
  

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
          <img  className={classes.photo} src={pic}/>
          <div className={classes.photoBg}></div>
          </div>
         </Grid>

      </Grid>
      
      <Container id="about" className={classes.container}>
        <Typography className={classes.h3} variant="h3">About Me</Typography>
        <Typography className={classes.paragraph} paragraph>
        Hello I am John Christian Casas. I am graduated from Batangas State University.
        I Edit Photo and Design Logo using Photoshop based on what you needs. I am detail oriented person who pays attention to every small details a can make a conscious effort in every task.  
        </Typography>
        <Link to="/about" className={classes.link} >
          <PortfolioButton>Read More</PortfolioButton>
        </Link>
      </Container>
      {/* <Container className={classes.container }>
      <Typography className={classes.h3}variant="h3">My Works</Typography>
            <Carousel >
              
              {img}
            
            </Carousel>
              
            <Link className={classes.link} to="/projects">
            <PortfolioButton>View Works</PortfolioButton>
            </Link>
    </Container> */}
      <Container className={classes.container}>
        <Typography className={classes.h3} variant="h3">Contact</Typography>
        <Typography className={classes.paragraph} paragraph>
          Looking to connect? Feel free to reach out through my various social
          media platforms or contact me directly through the website contact
          message functionality. I will get back to you as soon as possible.
        </Typography>
        <Link className={classes.link} to="/contact">
          <PortfolioButton>Contact Me</PortfolioButton>
        </Link>
        </Container>

    </div>
  );
}

export default Home;
