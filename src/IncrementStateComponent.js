import React from "react";
import "./App.css";

class IncrementStateComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increase = () => {
        console.log(this.state.count);
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count);
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div className="increment-container">
                <div>
                    <h1>{this.state.count}</h1>
                </div>
                <div className="button-container">
                    <button onClick={this.increase} className="increase-button">Increase</button>
                    <button onClick={this.decrease} className="decrease-button">Decrease</button>
                    <button onClick={this.reset}  className="reset-button">Reset</button>
                </div>
            </div>
        )
    }
}

export default IncrementStateComponent;