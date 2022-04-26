import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(){
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

function Footer() {
  return (
          <footer>
      <small> © 2022 S development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
    <MyComponent />
    </div>
    )
}


function MyComponent() {
  return (
    <div>
     </div>
  );
}


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