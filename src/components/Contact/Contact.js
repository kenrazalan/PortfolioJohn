import React,{useState}  from "react";
import { Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {PortfolioButton} from '../portfolio-button/portfolio-button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { useStyles } from './styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const classes= useStyles();
  const [open, setOpen] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 
  const handleSubmit =(e) =>{
    e.preventDefault();
    const form = {
      name,
      email,
      message
    }
    if(form.email!==""){
         axios.post('/api/form',form)
        setOpen(true);
        setName("");
        setEmail("");
        setMessage("");
    }}
  

  return (
    <form className={classes.root}>
      <Grid container direction="column" justify="center" className={classes.FormControl}>
        <h1 > CONTACT</h1>
        <Grid item className={classes.formItem}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.formItem}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.formItem}>
          <TextField
            id="outlined-multiline-static"
            label="Message:"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item style={{ textAlign: 'center' }} className={classes.formItem}>
           <PortfolioButton type="submit" onClick={handleSubmit}>
              Submit
            </PortfolioButton>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Messege Sent !
              </Alert>
            </Snackbar>
            
        </Grid>
      </Grid>
    </form>
  );
}

export default Contact;
