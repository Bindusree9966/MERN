import React, { useState } from 'react'
const Form = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        department:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        alert("Submitted")
    }
  return (
    <div>
        <h1>Form using UseState</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/><br/>
            <label htmlFor="">Department</label>
            <input type="text" name="department" value={formData.department } onChange={handleChange}/><br/>
            <button typr="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form