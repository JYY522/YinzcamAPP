import React, {useState, useEffect} from 'react';
import './user-detail.style.css';
import { Repo } from '../repo/repo.component';
import {Link} from 'react-router-dom';

function Repos({match}){
  const [item, setItem ] = useState([]);
  useEffect(() => {
    const fetchItem = async() => {
      const fetchItem = await fetch(
        `https://api.github.com/users/${match.params.name}/repos` 
      );
      const item = await fetchItem.json();
      setItem(item);
    };
    fetchItem();
  },[match]);
 
  
  
  
 return(
   <div>
   <h2 className="name">{match.params.name.toUpperCase()}</h2>
   <div className="repositories">
  <div className="link">
   <Link to ={`/${match.params.name}`} style={{ textDecoration: 'none' }}><h2 style={{color:'#193541'}}>Repositories</h2></Link>
   <Link to ={`/${match.params.name}/followers`} style={{ textDecoration: 'none' }}><h2>Followers</h2></Link>
   </div>
   <div>
   <table className="repo">
   <tbody>
   <tr>
   <th>Name</th>
   <th>Description</th>
   <th>Url</th>
   </tr>
   </tbody>
   </table>
   
    {item.map(ite => (
     <Repo key = {ite.id} ite = {ite}/>
    ))
  }
  
   </div>
   </div>
   
   
   
  
   
   </div>
 )
}
export default Repos;