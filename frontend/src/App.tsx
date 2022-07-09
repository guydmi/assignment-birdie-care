import React from 'react';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Welcome to our familinterface !</div>
      </header>
      <Home />
      <footer className="App-footer">
        <div>Thanks for trusting Birdie</div>
      </footer>
    </div>
  );
}

export default App;
