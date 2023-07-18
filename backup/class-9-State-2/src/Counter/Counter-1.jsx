import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("First Constructor")
    }
    render() {
        console.log("Second render method")
        return (
            <div>
                <h1>Counter Example</h1>
            </div>
        )
    }
}

export default Counter