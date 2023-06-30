import React, { Component } from 'react'; // import React from 'react';
import logo from './logo.svg'; // import logo from './logo.svg';
import './App.css'; // import './App.css';
import Sum from './Sum'; // import Sum from './Sum';

class App extends React.Component { // class App extends Component {
  render() { 
    return ( // Return the component
        <div className="App">
          <Sum />
        </div>
    )
  }
}

export default App; // Export the component