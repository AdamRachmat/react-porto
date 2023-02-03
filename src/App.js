
import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import './assets/css/custom.css';
import Service from './components/Service';
import Modals from './components/Modals';
function App() {
  
  return (
    <>
      <Header />
      <Home />
      <Service/>
      <Modals/>
      </>
  );
}

export default App;
