import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
imageContainer:{

    background: "rgb(238,174,202)",
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    minHeight:"172vh",

    color:"Black",

     margin: "auto",

     maxWidth: "100%",

     [theme.breakpoints.up('md')]:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
    


},
  
     
},

heroContent:{

  textAlign: "center",
  fontSize: "24px",
 
  maxHeight:"800px",
  width:"100%",

  [theme.breakpoints.up('md')]:{
    textAlign: "right",
   
  }
},
transition:{
  position: "relative",

  [theme.breakpoints.up('md')]:{
    display: 'flex',
    marginLeft:"120px"
  }
},
photo:{
  position: "relative",
  transition: "ease-in-out 300ms" ,
  width: "320px",
  height: "320px",
  zIndex: 1,
  '&:hover': {
    
    transform: "rotate(-6deg)"
  }

},
photoBg:{
  position: "absolute",
  background: "#021718",
  width: "320px",
  height: "320px",
  top: 0,
  left: 0
},
heroText: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  h3:{
    marginBottom: 20,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight:600,
    textAlign: "center"
  },
  name:{
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 900
  },
  describe:{
    fontFamily:"'Poppins', sans-serif",
  
  },
  paragraph:{
    fontFamily:"'Poppins', sans-serif",
    fontWeight:600,
    textAlign: "center"
  },
  heroImage:{
    marginBottom:50
     
   },
   heroImageP:{

   },
   contain:{
       marginBottom: "70px"
   },
   link:{
     textDecoration: "none"
   }
   
}))