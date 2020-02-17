import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App2.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/app"
        >
          Switch to app (not work in dev server yet)
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - This string only appears in app2
        </a>
      </header>
    </div>
  );
}

export default App;
