import React,{createContext,useState,useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; 
 




// const firebaseConfig = {

//     authDomain: "portfolio-img.firebaseapp.com",
//     databaseURL: "https://portfolio-img.firebaseio.com",
//     projectId: "portfolio-img",
//     storageBucket: "portfolio-img.appspot.com",
//     messagingSenderId: "740574318097",
//     appId: "1:740574318097:web:486fb32d47dfe5e63dabb0",
//     measurementId: "G-4J0TYNL76B",
//   };
  

  var firebaseConfig = {
    apiKey: "AIzaSyCuUMeK0kxWxGUQ2XNpSLS95KMbQF_wrsA",
    authDomain: "my-portfolio-d6cc6.firebaseapp.com",
    databaseURL: "https://my-portfolio-d6cc6.firebaseio.com",
    projectId: "my-portfolio-d6cc6",
    storageBucket: "my-portfolio-d6cc6.appspot.com",
    messagingSenderId: "523258500971",
    appId: "1:523258500971:web:f325112563feba67119e2e",
    measurementId: "G-T4LL6DK7JT"
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

