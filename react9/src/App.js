import React, { Component } from 'react'
import Registration from './FormHandling/Registration'
import Message from './Hooks/Message'
import Product from './Hooks2/Product'
class App extends Component {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Product/>
      </div>
    )
  }
}

export default App