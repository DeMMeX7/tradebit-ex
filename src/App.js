import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

  render() {

    return (
      <main className='main-container'>
        {/*<h1 style={{color: 'white'}} className='main-container__header'>*/}
        {/*  TradeBit Exchange Platform*/}
        {/*</h1>*/}
        {/*<h4 style={{color: 'white'}} className='main-container__subheader'>Example of trading platform working</h4>*/}
          <Form />


      </main>
    );
  }
}

export default App;
