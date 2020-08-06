import React, { useContext,useState } from "react";
import { ThemeContext } from "../../context/DataProvider";
import Card from "@material-ui/core/Card";
import ModalImage from 'react-modal-image';


import {
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Button,
} from "@material-ui/core";
import { PortfolioButton } from "../portfolio-button/portfolio-button";
import { useStyles } from "./styles";





function Project() {
  const classes = useStyles();
  
  const data = useContext(ThemeContext);
  const image = data.map(i=>(
    i.image
  ))



  
  const t = data.slice(1).map((li, i) => (
    <Grid item spacing={3} xs={12} sm={6} className={classes.gridc}>
      {/* <Card className={classes.root}> */}
      <ModalImage
        small={li.image}
        large={li.image}
        className={classes.media}
        image={li.image}
        hideZoom="true"
        hideDownload="true"
      />
      

      


      <h3 className={classes.h3}>{li.title}</h3>
      {/* <CardContent>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <div>{li.title}</div>
        
          </Typography>
        </CardContent> */}
      {/* </Card> */}
    </Grid>
  ));

  return (
    <div
      style={
        ({ flexGrow: 1 },
        { minHeight: "100vh" },
        { maxWidth: "100%" },
        { background: "#FFFFFA" },
        { minHeight: "100vh" })
      }
    >
      <h1 className={classes.title}>WORKS</h1>
      <Grid container >
        {t}
      </Grid>
      
  
      


    </div>
  );
}

export default Project;
