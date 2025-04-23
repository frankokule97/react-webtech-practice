import React from "react";

let myText = "Web Tech zero to hero"

function print() {
    return "React JS - ";
}

function App() {
    return (
        <>
            <h1 style={{color: "white", backgroundColor: "red"}}>Welcome to {print()} {myText}</h1>
            {/* We use objects and not string if we use style, also we use comma and not semicolons and camelCase for properties, jsx rules! */}
            <h2 className="sub-title">Example.</h2>
            <label htmlFor="fName">First name</label> {/* here we use htmlFor for and className */}
            <input name="fName" maxLength="5" autoFocus={true} placeholder="Enter name"/>
            {/*use camelCase for attributes and events always, placeholder is one word in eng*/}
            {/* for attribute values we use curly braces in jsx */}
        </> // {} - inside of braces only numbers and strings or functions that return string or number
    );
}

export default App;