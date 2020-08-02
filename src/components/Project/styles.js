import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth: 545,
        
        height:"80vh",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto"
    },
   
    media:{
        minHeight:"80%",
        margin: "auto"
            },
   
    gridc:{
        
        margin: "auto",width:"35%",
    },
    title:{
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
      fontWeight: "bold",
      margin:"40px 0"
    },description:{
        textAlign: "center",
        fontWeight: "bold"
    }

}))