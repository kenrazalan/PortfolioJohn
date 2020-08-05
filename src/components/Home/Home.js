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
import SimpleImageSlider from "react-simple-image-slider";


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
            I design beautiful websites & mobile apps that modern trends demand
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
     
      <Container className={classes.container}>
        <Typography className={classes.h3} variant="h3">About Me</Typography>
        <Typography className={classes.paragraph} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Link to="/about" className={classes.link} >
          <PortfolioButton>Read More</PortfolioButton>
        </Link>
      </Container>
      <Container className={classes.container }>
      <Typography className={classes.h3}variant="h3">My Works</Typography>
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
              
            {/* <SimpleImageSlider
                    
                    width={896}
                    height={504}
                    images={newImg}
                /> */}
            <Link className={classes.link} to="/projects">
            <PortfolioButton>View Works</PortfolioButton>
            </Link>
    </Container>
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
