import React, { Component } from 'react'; // import React from 'react';
import logo from './logo.svg'; // import logo from './logo.svg';
import './App.css'; // import './App.css';
import { Welcome } from './components/Welcome'; // import Welcome from './components/Welcome';

class App extends React.Component { // class App extends Component {
  render() { 
    return ( // Return the component
        <div className="App">
          <Welcome name="React" version="18.2.0">
            <p>React is a JavaScript library for building user interfaces.</p>
          </Welcome>
        </div>
    )
  }
}

export default App; // Export the component