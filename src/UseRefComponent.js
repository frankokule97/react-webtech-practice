import React from 'react';
import "./App.css";
import { useRef } from "react";

const UseRefComponent = () => {

    const name = useRef(null);
    const age = useRef(null);
    const gender = useRef(null);
    const state = useRef(null);
    const country = useRef(null);

    return (
        <div className="useRef-container">
            <div>
                <h2 style={{
                    color: "#29ddec",
                }}>useRef Exercise</h2>
            </div>
            <div className="inputRef-container">
                <input className="inputRef" placeholder="Name" type="text" ref={name}/>
                <input className="inputRef" placeholder="Age" type="text" ref={age}/>
                <input className="inputRef" placeholder="Gender" type="text" ref={gender}/>
                <input className="inputRef" placeholder="State" type="text" ref={state}/>
                <input className="inputRef" placeholder="Country" type="text" ref={country}/>
            </div>
            <div className="buttonRef-container">
                <button className="buttonRef">Name</button>
                <button className="buttonRef">Age</button>
                <button className="buttonRef">Gender</button>
                <button className="buttonRef">State</button>
                <button className="buttonRef">Country</button>
            </div>
        </div>
    )
}

export default UseRefComponent;