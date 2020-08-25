import React, {useState, useEffect} from 'react';
import { CardList } from '../card-list/card-list.component';
import './homepage.style.css';
import {SearchBox} from '../search/search-box.component'
import InfiniteScroll from 'react-infinite-scroll-component';


function HomePage(){
    const [users, setUsers ] = useState([]);
    const [since, setSince] = useState(0);
    const [searchField, setSearchField] = useState("");
    
    useEffect(() => {
    
      const fetchUsers = async() => {
        const fetchUsers = await fetch(
        `https://api.github.com/users?since=${since}`
        );
        const users = await fetchUsers.json();
        
        setUsers((prev) => [...prev, ...users])
    
      };
      fetchUsers();
    
    },[since]);

    

    var req = new XMLHttpRequest();
    req.open('GET', `https://api.github.com/users?since=${since}`, false);
    req.send(null);
    var headers = req.getResponseHeader('link').split(';')[0];
    var number = headers.match(/=(\S*)>/)[1];
    // console.log(headers);
    // console.log(number);

    const FetchUsers = async() => {
       setSince(number);
  
    };
   
  
      
    const handleChange1 = e => {
     setSearchField(e.target.value);
     }
     
     


  

  const filteredUsers = users.filter(user => 
          user.login.toLowerCase().includes(searchField.toLowerCase())
         )

    return (
      <div className="App" >
        <h1>GITHUB USERS</h1>
        <div>
        <SearchBox
        placeholder = 'search users'
        handleChange ={handleChange1} 
        />

       
         
        <InfiniteScroll
          dataLength={users.length}
          next={FetchUsers}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
       <CardList users={filteredUsers}  />
       </InfiniteScroll>
       </div>
     
       
       

       
        
       
      </div>
    );
  
  }
  


export default HomePage;


