import React from 'react'
import Message from './components/Message'
import Order from './components/Order'
class App extends React.Component {


    render() {
        return <div>
            <h1>App Component</h1>
            <hr />
            <Message />
            <hr />
            <Order />
        </div>
    }
}

export default App