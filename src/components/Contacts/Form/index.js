import React from "react";
import { useState } from "react";
import {  } from "../styles.css";

function Form({addContacts,contacts}) {
    //console.log(addContacts);

    const [form,setForm]=useState({fullname:"",phone_number:""});


    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        }
    
        const onSubmit=(e)=>{
            e.preventDefault();
            if(form.fullname==="" && form.phone_number===""){
                return false;
            }
            addContacts([...contacts,form]);
            setForm({fullname:"",phone_number:""})

            //console.log(form);

    }

  return (
    
    <form onSubmit={onSubmit}>
       <div>
        <div>
        <input name="fullname"  placeholder='Fullname' onChange={onChangeInput} value={form.fullname}/><br/>
        </div>
        <div>
        <input name="phone_number"  placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}/><br/>
        </div>
  
        <div className="btn">
            <button>Add</button>
        </div>
      
    </div>
    </form>
  )
}

export default Form;
