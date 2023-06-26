import React, { useContext, useState } from 'react'
import Createcontext from '../Createcontext/Createcontext'

const Addnote = (props) => {
const[notevalue, setNotevalue]=useState({title:"", description:"" , tag:""})
const context=useContext(Createcontext)
const {AddNote}=context

const onclick=async(e)=>{
    e.preventDefault()

    AddNote({title:notevalue.title, description:notevalue.description , tag:notevalue.tag})
    props.showalert("Added Note successfully","success")


setNotevalue({title:"", description:"" , tag:""})

}

const onchange=(e)=>{
setNotevalue({...notevalue, [e.target.name]:e.target.value})
    }
  return (
    <div>
    <div className='container my-5'>

      

    <h2 className='my-3'>ADD NOTE</h2>
    <form className="row g-3 needs-validation" >
  <div className="col-md-4">
    <label htmlFor="name1" className="form-label">Title</label>
    <input type="text" className="form-control" name='title' value={notevalue.title} onChange={onchange} id="name1"  required/>
    <div className="valid-feedback">
 
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="description1" className="form-label">Description</label>
    <input type="text" className="form-control" name='description' value={notevalue.description} onChange={onchange} id="description1"  required/>
    <div className="valid-feedback">
   
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="tag1" className="form-label">Tag</label>
    <input type="text" className="form-control"  name='tag' value={notevalue.tag} onChange={onchange} id="tag1"  required/>
    <div className="valid-feedback">
 
    </div>
  </div>



  <div className="col-12 d-flex justify-content-center">
    <button className="btn btn-primary" onClick={onclick} type="submit">Add Note</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Addnote
