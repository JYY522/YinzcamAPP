import React, {useState, useEffect} from 'react';
import './followers.style.css';
import { Follow } from '../follow/follow.component';
import {Link} from 'react-router-dom';

function Followers({match}){
  const [item, setItem ] = useState([]);
  useEffect(() => {
    const fetchItem = async() => {
      const fetchItem = await fetch(
        `https://api.github.com/users/${match.params.name}/followers` 
      );
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);
    };
    fetchItem();
    
  },[match]);
 
  
  
  
 return(
   <div>
   <h2 className="name">{match.params.name.toUpperCase()}</h2>
   <div className="repositories">
  <div className="link">
   <Link to ={`/${match.params.name}`} style={{ textDecoration: 'none' }}><h2>Repositories</h2></Link>
   <Link to ={`/${match.params.name}/followers`} style={{ textDecoration: 'none' }}><h2 style={{color:'#193541'}}>Followers</h2></Link>
   </div>
   <div>
   
   {item.map(ite => (
    <Follow key = {ite.id} ite = {ite}/>
   ))
 }

  
   </div>
   </div>
   
   
   
  
   
   </div>
 )
}
export default Followers;