import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        console.log("First Const")
        this.state = {
            msg: "Hellooooooo"
        }
    }
    gmHandler = () => {
        this.setState({ msg: "GM" })
    }
    gaHandler = () => {
        this.setState({ msg: "GA -lunch" })
    }
    geHandler = () => {
        this.setState({ msg: "GE - Tea Timie" })
    }
    gnHandler = () => {
        this.setState({ msg: "GN - Netflix Time" })
    }
    render() {
        console.log("Second - render method")
        return (
            <div>
                <h1>Message Component</h1>
                <h2>Message Value:{this.state.msg}</h2>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.geHandler}>GE</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message