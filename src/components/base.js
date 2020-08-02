import Rebase from 're-base';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCXkQwxHZZ-cVREALCZOUqkSP_iv2aDmuc",
    authDomain: "portfolio-img.firebaseapp.com",
    databaseURL: "https://portfolio-img.firebaseio.com",
    projectId: "portfolio-img",
    storageBucket: "portfolio-img.appspot.com",
    messagingSenderId: "740574318097",
    appId: "1:740574318097:web:486fb32d47dfe5e63dabb0",
    measurementId: "G-4J0TYNL76B"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const base = Rebase.createClass(app.database());
  const databse = firebase.database();

  var ref = database.ref("Data")
  console.log(ref)
  export {base}
