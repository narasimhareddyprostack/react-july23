import React from 'react'
import User from './Users/User'
import Employee from './Employee/Employee'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>List Rendering</a>
            </nav>
            <User />
        </div>
    )
}

export default App