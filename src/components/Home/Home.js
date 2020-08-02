import React,{useContext} from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import house from '../img/house.jpg';
import {PortfolioButton} from '../portfolio-button/portfolio-button';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.css";
import {ThemeContext} from '../../context/DataProvider';
import { useStyles } from './style'
import { Grid } from '@material-ui/core';
import pic from '../img/pic.jpg';



function Home() {
  const data = useContext(ThemeContext);

    const classes = useStyles();
    const img = data.slice(1).map(li=>(
      <div className={classes.carousel}>
        
      <img src={li.image} />
      <p className={li.title}>Legend 1</p>
      </div>
    ))
  return (
    <div >
        
      
      <Grid container spacing={3} justify="center" alignItems="center" className={classes.imageContainer}>
  

         <Grid item xs={12} sm={6} className={classes.heroContent}>
        <Typography>Hi, I'm John Christian</Typography>
        <p>
            I design beautiful websites & mobile apps that modern trends demand
        </p>
        <a href="#">Contact Me</a>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.heroImage}>
          <img  className={classes.photo} src={pic}/>
          <div className={classes.photoBg}></div>
         </Grid>

      </Grid>
     
      <Container className={classes.container}>
        <Typography className={classes.h3} variant="h3">About Me</Typography>
        <Typography className={classes.paragraph} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        
          <PortfolioButton>Read More</PortfolioButton>
       
      </Container>
      <Container className={classes.container }>
      <Typography className={classes.h3}variant="h3">Projects</Typography>
            <Carousel >
              
              {img}
                {/* <div>
                    <img src={house} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={house} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={house} />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
    </Container>
      <Container className={classes.container}>
        <Typography className={classes.h3} variant="h3">Contact</Typography>
        <Typography className={classes.paragraph} paragraph>
          Looking to connect? Feel free to reach out through my various social
          media platforms or contact me directly through the website contact
          message functionality. I will get back to you as soon as possible.
        </Typography>
        
          <PortfolioButton>Contact Me</PortfolioButton>
        
      </Container>

    </div>
  );
}

export default Home;
