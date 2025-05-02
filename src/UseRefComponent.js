import React from 'react';
import "./App.css";
import { useState, useEffect, useRef } from "react";

const UseRefComponent = () => {

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const stateRef = useRef(null);
    const countryRef = useRef(null);
    const [button, setButton] = useState("");

    const nameHandler = () => {
        nameRef.current.focus();
        setButton("name");
    }

    const ageHandler = () => {
        ageRef.current.focus();
        setButton("age");
    }

    const genderHandler = () => {
        genderRef.current.focus();
        setButton("gender");
    }

    const stateHandler = () => {
        stateRef.current.focus();
        setButton("state");
    }

    const countryHandler = () => {
        countryRef.current.focus();
        setButton("country");
    }

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <div className="useRef-container">
            <div>
                <h2 style={{
                    color: "#29ddec",
                }}>useRef Exercise</h2>
            </div>
            <div className="inputRef-container">
                <input className="inputRef" placeholder="Name" type="text" ref={nameRef}/>
                <input className="inputRef" placeholder="Age" type="text" ref={ageRef}/>
                <input className="inputRef" placeholder="Gender" type="text" ref={genderRef}/>
                <input className="inputRef" placeholder="State" type="text" ref={stateRef}/>
                <input className="inputRef" placeholder="Country" type="text" ref={countryRef}/>
            </div>
            <div className="buttonRef-container">
                <button onClick={nameHandler} className={button === "name" ? "buttonRef active" : "buttonRef"}>Name</button>
                <button onClick={ageHandler} className={button === "age" ? "buttonRef active" : "buttonRef"}>Age</button>
                <button onClick={genderHandler} className={button === "gender" ? "buttonRef active" : "buttonRef"}>Gender</button>
                <button onClick={stateHandler} className={button === "state" ? "buttonRef active" : "buttonRef"}>State</button>
                <button onClick={countryHandler} className={button === "country" ? "buttonRef active" : "buttonRef"}>Country</button>
            </div>
        </div>
    )
}

export default UseRefComponent;