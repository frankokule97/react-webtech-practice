import React from "react";
import "./App.css";
import {useState} from "react";

const Student = () => {

    const [students, setStudents] = useState([
        { id: 1, firstName: "Harry", age: 24, country: "India" },
        { id: 2, firstName: "Ron", age: 25, country: "USA" },
        { id: 3, firstName: "Hermione", age: 23, country: "Tunisia" },
    ]);

    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");

    const reset = () => {
        setFirstName("");
        setAge("");
        setCountry("");
    };

    const onAdd = () => {
        students.push({
            id: Math.max(...students.map((student) => student.id)) + 1,
            firstName,
            age,
            country,
        });
        setStudents([...students]);
        reset();
    };

    const handleDelete = (id) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    return (
        <div className="students-container">
            <div>
                <h1>Students</h1>
            </div>
            <div className="input-container">
                <input
                    className="input-text-size"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                <input
                    className="input-number-size"
                    type="number"
                    placeholder="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}/>
                <input
                    className="input-text-size"
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}/>
                <button onClick={onAdd} className="add-button">Add</button>
            </div>
            <div className="table-header table-container">
                <div className="name-row">Name</div>
                <div className="age-row">Age</div>
                <div className="country-row">Country</div>
                <div className="action-row">Action</div>
            </div>
            <div className="table-body">
                {students.map(student => (
                    <div className="table-container table-row" key={student.id}>
                        <div className="name-row">{student.firstName}</div>
                        <div className="age-row">{student.age}</div>
                        <div className="country-row">{student.country}</div>
                        <button onClick={() => handleDelete(student.id)} className="delete-button">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Student;