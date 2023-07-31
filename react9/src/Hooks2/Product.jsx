import React, {useState} from 'react'
let Product = ()=>{
    let [product,setProduct]=useState({
        p_Name: 'Iphone 13',
        p_Image: 'https://rukminim2.flixcart.com/image/224/224/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90',
        price: 57999,
        qty: 1
    })
    let decrHandler = ()=>{
    setProduct({
           ...product , qty:product.qty -1
        })
    }
    let incrHandler = ()=>{
        setProduct({
            ...product,qty:product.qty +1
        })
    }

    return <div>
            <h3>Product Comp</h3>
            <div className="container">
                <pre>{JSON.stringify(product)}</pre>
                <div className="row">
                    <div className="col-md-10">
                        <table className='table'>
                            <thead className='bg-warning text-white'>
                                <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.p_Name}</td>
                                    <img src={product.p_Image} alt="" />
                                    <td>{product.price}</td>
                                    <td><button onClick={decrHandler}>-</button> {product.qty} <button onClick={incrHandler}>+</button></td>
                                    <td>{product.qty * product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
}

export default Product
