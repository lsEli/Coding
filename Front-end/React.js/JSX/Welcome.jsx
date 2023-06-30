import React from "react"; // Import React

const Welcome = (props) => {
    /**
    return React.createElement(
        "div",
        {id: "welcomeId", className: "welcomeClass"},
        React.createElement( // Create a child element inside the div
            "h1",
            {id: "welcomeHeader"},
            "Welcome!"
        )
    ); // Return the element
    */
   return (
         <div id="welcomeId" className="welcomeClass">
            <h1 id="welcomeHeader">Welcome to {props.name} {props.version}!</h1>
            {props.children}
        </div>
    )
}

export default Welcome; // Export the component