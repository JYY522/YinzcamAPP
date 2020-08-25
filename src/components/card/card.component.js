import React from 'react';
import {Link} from 'react-router-dom';
import './card.style.css'

// import userDetail from '../user-detail/user-detail.component.js'

export const Card = props => (
    
   
        <div className = 'card-container'>
       <Link to ={`/${props.user.login}`}><img alt='monster' src={`https://avatars0.githubusercontent.com/u/${props.user.id}?v=4?`} /></Link>
        <h2> {props.user.login }</h2>
        </div>
    
        
    
        
    
    
)