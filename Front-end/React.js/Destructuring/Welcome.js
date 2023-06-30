import React from "react"; // Import React

const Welcome = ({name}) => { // Create a functional component
    return ( // Return the component
        <div className="Welcome">
            <h1>Welcome to {name}!</h1>
        </div>
    )
}

export default Welcome; // Export the component