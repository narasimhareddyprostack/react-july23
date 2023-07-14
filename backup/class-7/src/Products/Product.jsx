import React from 'react'

class Product extends React.Component {

    p_Name = "Iphone 12 mini"
    p_Price = 45000
    p_Color = ['Blue', 'Black', 'Red']
    p_Image = 'data:image/jpeg;base64,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'
    render() {
        return <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_Image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[0]}</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_Image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[0]}</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card"></div>
                        <div className="card-header">
                            <img src={this.p_Image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.p_Name}</li>
                                <li className='list-group-item'>{this.p_Price}</li>
                                <li className='list-group-item'>{this.p_Color[0]}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Product