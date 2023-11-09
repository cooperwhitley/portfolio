import React, { useState, Fragment, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/shared/Header';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <h1>who am i</h1>
      <Landing />
    </div>
  );
}

export default App;
