import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  const page = (
  <div className="App">
    <Header />
    <MainContent/>
    <Footer/>
  </div>
  
  )
  return page;
}

export default App;
