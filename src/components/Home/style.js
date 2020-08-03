import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme)=>({
    imageContainer:{
      
        
        // textAlign:"center",
        // background:"#E5E5E5",
        background: "rgb(238,174,202)",
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        minHeight:"100vh",
        // height: "100vh",
        color:"Black",
        //  background:`#F5A05C url("${vector}")`,
         margin: "auto",
        //  backgroundRepeat:"no-repeat",
        //  backgroundPosition: "100% 100%",
        //  backgroundSize: "cover",
         maxWidth: "100%",
        //  display: "flex",
        //  alignItems: "center",
         
    },
    
    heroImage:{
        maxHeight:"800px",
        width:"100%",
        background: "gray"
        

    },
    heroContent:{
      // background: "yellow",
      textAlign: "center",
      fontSize: "24px",
     
      maxHeight:"800px",
      width:"100%",
    },
    transition:{
      position: "relative",
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
        fontWeight: 900
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