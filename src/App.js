import React, { Component } from 'react';

import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ContactList/>
      </div>
    );
  }
}

export default App;
