import React from 'react';
import Head from './components/Header'
import Event from './containers/Event'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'


import './App.css';

function App() {
  
  return (
    <div>
    <Head/>
    <Event/>  
    </div>
  );
}

export default App;
