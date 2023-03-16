import React, { useState } from 'react'
import Contacts from '..';

function List ({contacts}) {
    const[filterText,setFilterText]=useState("");
    const onChangedInput=(e)=>{
        setFilterText(e.target.value)
    }
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
            return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
        });
    });
    //console.log(filtered,"filtered");
  return (
    <div>
        <input value={filterText} name="filterInput" placeholder='Filter Contact' onChange={onChangedInput} />
        <ul className='list'>  
        {
            // contacts.map((contact,index)=>(

            //     <li key={index}>{contact.fullname}</li>

            // ))
            filtered.map((contact,index)=>(

                     <li key={index}>
                        <span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>
                        </li>
    
                 ))
        }
       
       </ul> 

      <p>Total contacts ({filtered.length})</p>

      
    </div>
  )
}

export default List;
