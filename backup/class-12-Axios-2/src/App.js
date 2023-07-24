import React from 'react'
import User from './AxiosEx/User'
import Product from './Products/Product'
import Users from './User/Users'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>List Rendering</a>
            </nav>
            <Users />
        </div>
    )
}

export default App