import React from 'react';
// import {Link} from 'react-router-dom';
import './follow.style.css'

// import userDetail from '../user-detail/user-detail.component.js'

export const Follow = props => (
    
   
        <div >
        <table className="follow">
        <tbody>
        <tr>
        <td><img className="image" alt='' src={props.ite.avatar_url} /></td>
        <td>{props.ite.login}</td> 
    
        </tr>
        </tbody>
        </table> 
        </div>
      
    
)