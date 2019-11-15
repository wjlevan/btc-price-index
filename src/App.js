import React from 'react';
import './App.css';
import { MainComponent } from './components/MainComponent';
import { TitleComponent } from './components/TitleComponent';
import { FooterComponent } from './components/FooterComponent';


function App() {
  return (
    <div className="container">
      <div className="title"><TitleComponent /></div>
      <div className="main"><MainComponent /></div>
      <div className="footer"><FooterComponent /></div>
    </div>
  );
}

export default App;

