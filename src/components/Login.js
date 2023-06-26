import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
 const [credentials, setCredentials] =useState({email:"",password:""})

const navigate=useNavigate()
 
const onclick=async(e)=>{
  e.preventDefault()

  const response= await fetch( "http://localhost:5000/api/auth/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email:credentials.email, password :credentials.password})
  })
 const json = await response.json()
 if(json.authtoken){
  console.log("token",json.authtoken)
  localStorage.setItem("token",json.authtoken)
props.showalert("logged in successfully","success")

navigate('/')
 }
 else(
  props.showalert("Please enter a valid credentials","danger")
 )

setCredentials({email:"",password:""}) 
}
  
 const onchange=(e)=>{
  setCredentials({ ...credentials, [e.target.name]:e.target.value})
 }
  return (
    <div>
      <div className='container my-5'>  
      <h1>Login below</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"name='password' value={credentials.password}  onChange={onchange}id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={onclick} className="btn btn-primary">Submit</button>
</form>
</div>

    </div>
  )
}

export default Login
