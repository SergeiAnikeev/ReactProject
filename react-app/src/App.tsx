import React from 'react';
import logo from './images/logo.svg';
import './style.css';
import Header from './Header';
import Footer from './components/Footer';
import MainContent from './MainContent';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const page = (
  <div className="App">
    <Navbar />
    <Main/>
    <Footer/>
    
  </div>
  
  )
  return page;
}
