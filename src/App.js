import React from 'react';
import './App.css';
import { MainComponent } from './components/MainComponent';
import { NavComponent } from './components/NavComponent';
import { FooterComponent } from './components/FooterComponent';
import { LogoComponent } from './components/LogoComponent';


function App() {
  return (
    <div className="container">
      <header className="App App-header">
        <NavComponent />
        <LogoComponent />
        <MainComponent />
      </header>
      <div>
        <FooterComponent />

    </div>
    </div>
  );
}

export default App;

