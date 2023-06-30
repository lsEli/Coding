import React, { Component } from 'react'; // import React from 'react';
import logo from './logo.svg'; // import logo from './logo.svg';
import './App.css'; // import './App.css';
import { Welcome } from './components/Welcome'; // import Welcome from './components/Welcome';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Welcome />
        </div>
    )
  }
}

export default App; // export default App;