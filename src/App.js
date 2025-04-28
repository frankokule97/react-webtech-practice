/*
// component practice
import React from "react";

let myText = "Web Tech zero to hero"

function print() {
    return "React JS - ";
}

function App() {
    return (
        <>
            <h1 style={{color: "white", backgroundColor: "red"}}>Welcome to {print()} {myText}</h1>
            {/!* We use objects and not string if we use style, also we use comma and not semicolons and camelCase for properties, jsx rules! *!/}
            <h2 className="sub-title">Example.</h2>
            <label htmlFor="fName">First name</label> {/!* here we use htmlFor for and className *!/}
            <input name="fName" maxLength="5" autoFocus={true} placeholder="Enter name"/>
            {/!*use camelCase for attributes and events always, placeholder is one word in eng*!/}
            {/!* for attribute values we use curly braces in jsx *!/}
        </> // {} - inside of braces only numbers and strings or functions that return string or number
    );
}

export default App;*/

/*// props practice
import React from "react";
import Button from "./Button"

function App () {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                padding: "3rem"
            }}>
                <h1>Props Exercise</h1>
            </div>
            <div style={{
                display: "flex",
                gap: "2rem"
            }}>
                <Button buttonName="Click me" color="#1d84c8" textColor="white" borderRadius="unset" border="1px solid black" boxShadow="4px 4px 3px lightgray"/>
                <Button buttonName="Submit" color="#1bb41b" textColor="white" borderRadius="7.5px" border="unset" boxShadow="4px 4px 3px lightgray"/>
                <Button buttonName="Cancel" color="#ec5d6e" textColor="white" borderRadius="20px" border="1px solid black" boxShadow="4px 4px 3px lightgray"/>
                <Button buttonName="Reset" color="#e2b33d" textColor="black" borderRadius="4px" border="unset" boxShadow="4px 4px 3px lightgray"/>
            </div>
        </div>
    )
}

export default App;*/

import React from "react";
import "./App.css";

function subscribe () {
    return alert("Thank you very much!");
}
function dontSubscribe () {
    return alert("Please reconsider your decision");
}

const App = () => {
    return (
        <div className="container">
            <div onMouseOver={subscribe} className="first-circle">I will subscribe</div>
            <div onMouseOver={dontSubscribe} className="second-circle">I won't subscribe</div>
        </div>
    )
}

export default App;
