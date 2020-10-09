import React from 'react';
import Head from './components/Header'
import Event from './containers/Event'
import './App.css';

class App extends React.Component {

  render(){

    return (
      <div>
      <Head/>
      <Event/>  
      </div>
    );
  }
  
}

export default App;
