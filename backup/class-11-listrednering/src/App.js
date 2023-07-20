import React from 'react'

import Employee from './Employee/Employee'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>List Rendering</a>
            </nav>
            <Employee />
        </div>
    )
}

export default App