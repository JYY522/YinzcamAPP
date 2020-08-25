import React from 'react';
// import {Link} from 'react-router-dom';
import './repo.style.css'

// import userDetail from '../user-detail/user-detail.component.js'

export const Repo = props => (
    
   
        <div >
        <table className = "repo">
        <tbody>
        <tr>
        <td>{props.ite.name}</td> 
        <td>{props.ite.description}</td>
        <td>{props.ite.html_url}</td> 
        </tr>
        <tr>
        </tr>
        </tbody>
        </table>
        
        </div>
      
    
)