import React from "react";
import "./App.css";
import { useState } from "react";
import FirstChildComponent from "./FirstChildComponent";
import SecondChildComponent from "./SecondChildComponent";

const ParentComponent = () => {

    const [isColorChanged, setIsColorChanged] = useState("false");
    const [input, setInputText] = useState("");



    return (
        <div className="parent-container">
            <div>
                <h1>Parent Component</h1>
            </div>
            <div className="child-container">
                <div>
                    <FirstChildComponent
                        setIsColorChanged={setIsColorChanged}
                        input={input}
                    />
                </div>
                <div>
                    <SecondChildComponent
                        isColorChanged={isColorChanged}
                        setInputText={setInputText}
                    />
                </div>
            </div>
        </div>
    )
}

export default ParentComponent;