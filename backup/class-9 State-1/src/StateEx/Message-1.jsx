import React, { Fragment } from 'react'
class Message extends React.Component {
    msg = "Hello"
    gmHandler = () => {
        this.msg = "Hello, GM ! Mr R"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        console.log("render method")
        return <Fragment>
            <h1>Message Value:{this.msg}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button>GN</button>
        </Fragment>
    }

}
export default Message