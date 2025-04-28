import React, { useState } from "react";
import "./App.css";

const ButtonFn = () => {

    const [count, setCounter] = useState(0);

    const increase = () => {
        setCounter(count + 1);
    }

    const decrease = () => {
        setCounter(count - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <div className="increment-container">
            <div>
                <h1>{count}</h1>
            </div>
            <div className="button-container">
                <button onClick={increase} className="increase-button">Increase</button>
                <button onClick={decrease} className="decrease-button">Decrease</button>
                <button onClick={reset}  className="reset-button">Reset</button>
            </div>
        </div>
    )
}

export default ButtonFn;