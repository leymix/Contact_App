import React from "react";
import List from "./List";
import Form from "./Form";
import { useState,useEffect } from "react";
import {} from "./styles.css";


function Contacts(){
    const[contacts,setContacts]=useState([
        {
            fullname:"Berk",
            phone_number:"146688",
        },
        {
            fullname:"Ayşe",
            phone_number:"8988989898",
        },
        {
            fullname:"Yamal orkun",
            phone_number:"755388",
        },
    ]);
    useEffect(()=>{

    console.log(contacts);
    },[contacts])
        
    
    return(
        <div id="container">
            <h1>Contacts</h1>
         <List contacts={contacts}/>
         <Form addContacts={setContacts} contacts={contacts} />

        </div>
    )
}
export default Contacts;