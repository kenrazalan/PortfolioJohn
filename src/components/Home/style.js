import {makeStyles} from '@material-ui/core/styles';
import vector from '../img/Group 1.svg';

export const useStyles = makeStyles((theme)=>({
    imageContainer:{
      
        
        // textAlign:"center",
        background:"#F5A05C",
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
    photoBg:{
      
    },
    heroImage:{
        maxHeight:"800px",
        width:"100%",
        background: "gray"
        

    },
    heroContent:{
      background: "yellow",
      maxHeight:"800px",
      width:"100%",
    },
    photo:{
      width: "420px",
      height: "420px",
      marginTop: 80
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
        fontFamily:"'Poppins', sans-serif",
        fontWeight:900
      },
      paragraph:{
        fontFamily:"'Poppins', sans-serif",
        fontWeight:600
      },
      heroImage:{
        position: "relative",
        
      },
      heroImageP:{
   
      }
      

      
    
}))