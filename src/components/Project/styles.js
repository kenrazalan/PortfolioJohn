import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    // root:{
    //     maxWidth: 545,
        
    //     height:"80vh",
    //     margin: "auto"
    // },
   
    media:{
        minHeight:"80%",
        margin: "auto",
        width:"100%"
            },
   
    gridc:{
        textAlign: "center",
        margin: "auto",
        width:"35%",
    },
    title:{
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
      fontWeight: "600",
      margin:"40px 0",
      marginBottom: 20
    },
    h3:{
        textAlign: "center",
           fontWeight: "bold",
           fontFamily: "'Montserrat', sans-serif",
    },
    video:{
        fontWeight: "bold",
           fontFamily: "'Montserrat', sans-serif",
    }
    // ,description:{
    //     textAlign: "center",
    //     fontWeight: "bold"
    // }

}))