import React from 'react'
import Product from './Product/Product'
const App = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <a href='#' className='navbar-brand'>Product Example</a>
            </nav>
            <hr />
            <Product />
        </div>
    )
}

export default App