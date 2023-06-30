import React, { Component } from 'react' // import React from 'react';

export class Sum extends Component { // export class Sum extends Component {
    constructor(props) { 
        super(props)
      
        this.state = {
           sum: 0
        }
    }

    Sum() { // Sum method
        /**
        this.setState(
            {
                sum: this.state.sum + 1
            },
            () => console.log(this.state.sum) // Callback function
        )
        */

        this.setState((prevState) => ({ // Set the state
            sum: prevState.sum + 1
        }))

        console.log(this.state.sum) // Log the state
    }

    render() { // render method
        return ( // Return the component
           <div>
               <h1>Sum: {this.state.sum}</h1>
               <button onClick={() => this.Sum()}>Add 1</button>
            </div>
        )
    }
}

export default Sum // export default Sum