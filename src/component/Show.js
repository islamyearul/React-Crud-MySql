import React, { Component } from 'react';
import API from '../axios/Api';
import Datatable from './Datatable'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Show extends Component {
  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
      }

      componentDidMount(){
        //get request
        axios.get('http://localhost/react/react-crud/database/data.php').then(res => 
        {
        
        this.setState({data: res.data});
           }); 
        
        }

 
    render() {
        return (
            <div className='my-5'>
                <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sl</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
  {this.state.data.map((result, index) => {
            return (
             
                 <tr>
                  <td>{index+1}</td>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.email}</td>
                  <td>{result.phone}</td>
                  <td>
                      <Link to='#' className='btn btn-primary'>Edit</Link> &nbsp;
                      <Link to='#' className='btn btn-danger'>Delete</Link>
                  </td>
                </tr>
             
            )
          })}
  
    
  </tbody>
</table>
            </div>
        );
    }
}

export default Show;