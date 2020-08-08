import {makeStyles} from '@material-ui/core/styles';
import wood from '../img/wood.jpg';

export const useStyles = makeStyles((theme)=>({
    imageContainer:{
      
        
       
        background: "rgb(238,174,202)",
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        minHeight:"100vh",
      
        color:"Black",
        
         margin: "auto",
           background:` url("${wood}")`,
          backgroundRepeat:"no-repeat",
        
          backgroundSize: "cover",
         maxWidth: "100%",
       //  backgroundPosition: "100% 100%",
         


        [theme.breakpoints.up('md')]:{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "100%",
            


    },
  },
    heroImage:{
        maxHeight:"800px",
        width:"100%",
        background: "gray",
      

    },
    heroContent:{
      // background: "yellow",
      textAlign: "center",
      fontSize: "24px",
      
      maxHeight:"800px",
      width:"100%",

      [theme.breakpoints.up('md')]:{
        textAlign: "center",
       
      }
    },
    transition:{
      position: "relative",
      
      [theme.breakpoints.up('md')]:{
        display: 'flex',
        marginLeft:"120px",
        
      }
      
    },
    photo:{
      position: "relative",
      transition: "ease-in-out 300ms" ,
      width: "320px",
      height: "320px",
      zIndex: 1,
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      '&:hover': {
        
        transform: "rotate(-6deg)"
      }
      ,
      
      [theme.breakpoints.up('lg')]:{
        width: "450px",
        height: "420px",
        marginTop:"50px"
      },
      
      [theme.breakpoints.up('xl')]:{
        width: "500px",
        height: "450px",
        marginTop:"50px"
      }
   
    },
    photoBg:{
      position: "absolute",
      background: "#021718",
      width: "320px",
      height: "320px",
      top: 0,
      left: 0
      ,
 
boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      
      [theme.breakpoints.up('lg')]:{
        width: "450px",
        height: "420px",
        marginTop:"50px"
      },
      
      [theme.breakpoints.up('xl')]:{
        width: "500px",
        height: "450px",
        marginTop:"50px"
      }

    },
    heroText: {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      container: {
        textAlign: 'center',
        marginTop: 50,
        
       
      },
      link: {
        textDecoration: 'none'
      },
      projectGrid: {
        marginTop: 50,
        padding: 10
      },
      carousel:{
        maxHeight: '80vh',
        
        display: "flex",
        margin: "0 100px"

      },
      caImage:{
        
      },
    
      h3:{
        marginBottom: 20,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:600
      },
      paragraph:{
        fontFamily:"'Poppins', sans-serif",
        fontWeight:600
      },
      name:{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 900,
        textShadow: "2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)",


      },
      describe:{
        fontFamily:"'Poppins', sans-serif",
       
      
      },
      heroImage:{
       marginBottom:50
        
      },
      heroImageP:{
   
      }
      

      
    
}))