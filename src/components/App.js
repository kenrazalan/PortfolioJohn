import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollToTop/ScrollToTop';

import Footer from './Footer/Footer';
import {Router} from '../router/Router';
import {DataProvider} from '../context/DataProvider'

function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
   <DataProvider>
      <Navbar/>
      <Router/>
      <Footer/>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
