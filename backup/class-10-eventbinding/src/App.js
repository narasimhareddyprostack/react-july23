import React from 'react'
//import CompA from './PropsDrilling/CompA'
import Message from './EventBinding/Message'
import Salary from './EventBinding/Salary'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>Props Example</a>
            </nav>
            <Salary />
        </div>
    )
}

export default App