import React from 'react';
import './App.css';
import { MainComponent } from './components/MainComponent';
import { TitleComponent } from './components/TitleComponent';
import { FooterComponent } from './components/FooterComponent';


function App() {
  return (
    <div className="container">
      <header className="App App-header">
        <TitleComponent />
        <MainComponent />
      </header>
      <div>
        <FooterComponent />

    </div>
    </div>
  );
}

export default App;

