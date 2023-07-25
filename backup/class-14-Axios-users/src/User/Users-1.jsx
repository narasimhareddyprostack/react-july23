import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    state;
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
        .then((response)=>{
            console.log(response.data)
            this.setState({
                user:response.data
            })
        })
        .catch(()=>{})
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
        <div className='col-md-8'>
        <h1>User Component</h1>
        <pre>{JSON.stringify(this.state.user)}</pre>
        <h3>{this.state.user.limit}</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Home - City</th>
                    <th>Work - City</th>
                </tr>
            </thead>
            <tbody>
                    {
                        Object.keys(this.state.user).length>0 ?  
                        <>
                        {
                            this.state.user.users.map((user)=>{
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.address.city}</td>
                                </tr>
                            })
                        }
                        </>:<h3>No Data</h3>
                    }
            </tbody>
        </table>
        </div>
        </div>
      </div>
    )
  }
}

export default Users