import React, {Component} from "react"; // Import React

class Welcome extends Component { // Create a class component
    constructor() { // Initialize state
        super();
        this.state = {
            message: "Welcome to Reakt!"
        }
    }

    changeState() { // Change the state
        this.setState({
            message: "Thanks for your personal data!"
        })
    }

    render() { // Render the component
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>Free Courses! Click here!</button>
            </div>
        )
    }
}

export default Welcome; // Export the component