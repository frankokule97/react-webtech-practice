import React from 'react';
import "./App.css";

const FirstChildComponent = (props) => {

    let changeColor = true;

    const updateChildTwo = () => {
        props.setIsColorChanged(changeColor);
        changeColor = !changeColor;
    };

    return(
        <div className="first-child">
            <div>
                <h2>First Child Component</h2>
            </div>
            <div>
                <button
                    onClick={updateChildTwo}
                    style={{
                    backgroundColor: "#7b4d15",
                    color: "#ffffff"
                }}>Change Child 2</button>
            </div>
            <div style={{
                paddingRight: "4rem"
            }}>
                <h3>Value from Child Two: {props.input}</h3>
            </div>
        </div>
    )
}

export default FirstChildComponent;