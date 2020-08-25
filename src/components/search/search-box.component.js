import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder,handleChange}) => (
    
    <>
    <div className = 'search'>
   
         <input  
        type = 'text' 
        placeholder = {placeholder}  
        onChange = {handleChange}
         />
         </div>
         </>
         
);