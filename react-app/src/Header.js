import React from 'react';
import logo from './images/logo.svg';

export default function Header(){
    return  (
    <header className="App-header">
      <nav className="nav">
        <img className='nav-logo' src={logo}/>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </header>
      )
    }
    
 