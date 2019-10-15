import React from 'react';
import './App.css';
import { MainComponent } from './components/MainComponent';
import { NavComponent } from './components/NavComponent';
import { FooterComponent } from './components/FooterComponent';

function App() {
  return (
    <div className="container">
      <header className="App App-header">
        <NavComponent />
        <MainComponent />
      </header>
      <div>
        <FooterComponent />

    </div>
    </div>
  );
}

export default App;
