import React, { Component } from 'react'
import Registration from './FormHandling/Registration'
import Message from './Hooks/Message'
class App extends Component {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Message/>
      </div>
    )
  }
}

export default App