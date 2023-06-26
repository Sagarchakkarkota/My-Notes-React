import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Navbar = () => {

const navigator=useNavigate()

  const clicklogout=()=>{

localStorage.removeItem("token")

navigator('/login')

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">MY NOTES</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        
        {!localStorage.getItem("token")?  <form className='d-flex'>  
        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
        <li><Link className="nav-link" to="/signup">Signup</Link></li>
        </form>:<button onClick={clicklogout} className='btn btn-primary'>Logout</button>}
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

