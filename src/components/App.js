import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Contact from './Contact/Contact'
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Project from './Project/Project';
import {DataProvider} from '../context/DataProvider'

function App() {
  return (
   <BrowserRouter>
   <DataProvider>
      <Navbar/>
      <Home/>
      <Footer/>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
