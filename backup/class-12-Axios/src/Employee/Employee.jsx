import React, { Component } from 'react'
import employee from './objex'
export class Employee extends Component {
    user = {
        user_Id: 101,
        user_Name: "Vignesh"
    }

    render() {
        let { id } = employee
        let { user_Id } = this.user
        return <div>
            <h1>Employee Comp</h1>
            <pre>{JSON.stringify(employee)}</pre>
            <h3>{id}</h3>
            <h4>{user_Id}</h4>
        </div>
    }
}

export default Employee