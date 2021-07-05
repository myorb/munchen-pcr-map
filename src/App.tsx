import React from 'react';
import './App.css';
import MainMap from './components/MainMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMap/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Map of PCR tests 
        </p>
      </header>
    </div>
  );
}

export default App;
