import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Statecontext from "./Createcontext/Statecontext";
import Alert from "./components/Alert";

function App() {
  
  const [alertt, setalertt] = useState(null);
  
  const showalert=(message,type)=>{
    setalertt({
      msg:message,
      type:type,
    })
      setTimeout(() => {
       setalertt(null)
      }, 3000);
  
  }
return (<> 
<Statecontext>  
  <Router> 
   <Navbar/>
 <Alert alert={alertt}/>
   <Routes>
      <Route exact path="/" element={<Home showalert={showalert}/>}  />
      <Route exact path="/login" element={<Login showalert={showalert}/>}  />
      <Route exact path="/signup" element={<Signup showalert={showalert}/>}  />
     
      
   </Routes>

 </Router>
 </Statecontext>
</>
  );
}

export default App;

