import React from 'react';
import './App.css';
import { MainDisplay } from './components/MainComponents';
import { NavComponent } from './components/NavComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent />
        <MainDisplay />
      </header>
      <div>

    </div>
    </div>
  );
}

export default App;
