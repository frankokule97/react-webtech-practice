import React from 'react';
import "./App.css";

const SecondChildComponent = (props) => {
    return(
        <div className="second-child">
            <div>
                <h2>Second Child Component</h2>
            </div>
            <div style={{
                backgroundColor: (props.isColorChanged ? "#f80812" : "#54d81a"),
                height: "5rem",
                width: "5rem",
            }}><p></p></div>
            <div>
                <input type="text" onChange={(e) => props.setInputText(e.target.value)}/>
            </div>
        </div>
    )
}

export default SecondChildComponent;