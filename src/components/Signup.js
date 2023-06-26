import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [createcred, setCreatecred]=useState({name: "" ,email: "", password: ""})
const navigate=useNavigate()
  const onclick=async(e)=>{
    e.preventDefault()
    const response= await fetch("http://localhost:5000/api/auth/createuser",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({name:createcred.name, email:createcred.email, password: createcred.password})
    })
    const json= await response.json()
    if(json.authtoken){ 
    localStorage.setItem("token",json.authtoken)
    console.log("token:", json.authtoken)
    props.showalert("Account Created successfully","success")

    navigate('/')
  }
  
    setCreatecred({name: "" ,email: "", password: ""})
  }


  const onchange=(e)=>{
setCreatecred({...createcred, [e.target.name]:e.target.value})
  }
  return (
    <div>
      <div className='container my-3'>
        <h1>Create an Account</h1> 
         <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={ createcred.name} onChange={onchange}  id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email' value={ createcred.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={createcred.password } onChange={onchange}  id="exampleInputPassword1"/>
  </div>
  

  <button type="submit" className="btn btn-primary" onClick={onclick}>Submit</button>
</form>
</div>
    </div>
  
  )
}

export default Signup
