// src/App.js
import React from 'react';
import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Management App</h1>
        <SignupForm />
      </header>
    </div>
  );
}

export default App;
