import React from 'react'
import User from './User/Users'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>List Rendering- Axios</a>
            </nav>
          <User/>
        </div>
    )
}

export default App