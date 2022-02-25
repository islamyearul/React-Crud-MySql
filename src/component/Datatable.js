import React from "react";
import {Link} from 'react-router-dom'
import API from "../axios/Api";

function Datatable({students, refresh}){
    return (
        <tr>
            <td>{students.id}</td>
            <td>{students.name}</td>
            <td>{students.email}</td>
            <td>{students.phone}</td>
        </tr>
    )
}

export default Datatable;