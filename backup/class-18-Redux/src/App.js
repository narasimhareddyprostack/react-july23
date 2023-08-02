import React, { Component } from 'react'
import Message from './Message/Message'
import {Provider} from 'react-redux'
import {store} from './redux/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <h3>App Component</h3>
        <hr/>
        <Message/>
      </div>
      </Provider>

    )
  }
}

export default App