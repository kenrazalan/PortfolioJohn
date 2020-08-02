import React,{createContext,useState,useEffect} from 'react';
import firebase from "firebase";




const firebaseConfig = {
    apiKey: "AIzaSyCXkQwxHZZ-cVREALCZOUqkSP_iv2aDmuc",
    authDomain: "portfolio-img.firebaseapp.com",
    databaseURL: "https://portfolio-img.firebaseio.com",
    projectId: "portfolio-img",
    storageBucket: "portfolio-img.appspot.com",
    messagingSenderId: "740574318097",
    appId: "1:740574318097:web:486fb32d47dfe5e63dabb0",
    measurementId: "G-4J0TYNL76B",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function Test() {
    const [larawan, setLarawan] = useState([]);
  
    useEffect(() => {
      const database = firebase.database();
  
      const ref = database.ref("Data");
  
      ref.on("value", (snapshot) => {
       
        const value = snapshot.val().map((li) => li);
        setLarawan(value);
      });
    }, []);
    return larawan;
  }






export const ThemeContext = createContext();

export function DataProvider(props){
    const data= Test();
    return(<ThemeContext.Provider value={data}>
        {props.children}
    </ThemeContext.Provider>)
}

