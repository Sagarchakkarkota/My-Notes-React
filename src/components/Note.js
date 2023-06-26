import React, {   useContext, useEffect, useRef, useState } from 'react'
import Addnote from './Addnote'
import Createcontext from '../Createcontext/Createcontext'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom'

const Note = (props) => {
  const navigate=useNavigate()
const context=useContext(Createcontext)

const{getnotes,notes,EditNote}=context
useEffect((e)=>{
if(localStorage.getItem('token')){
  getnotes()

}
else{
navigate('/login')
}
},[])

const ref=useRef(null)
const Closeref=useRef(null)

const [notevalue, setNotevalue]=useState({id:"",etitle:"", edescription:"" ,etag:"" })


const Editclick=(currentNote)=>{
ref.current.click()
setNotevalue({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag })
}
const onclick=()=>{
  Closeref.current.click()
EditNote(notevalue.id, notevalue.etitle, notevalue.edescription, notevalue.etag )
setNotevalue({id:"",etitle:"", edescription:"" ,etag:"" })
props.showalert("Note Edited successfully","success")


}
const onchange=(e)=>{
  setNotevalue({...notevalue,[e.target.name]:e.target.value})
}
  return (
    <div>
  
      <div className="container">
        <Addnote showalert={props.showalert} />
       
      </div>
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" >
<div className="col-md-4">
  <label htmlFor="name1" className="form-label">Title</label>
  <input type="text" className="form-control" name='etitle' value={notevalue.etitle} onChange={onchange} id="name1"  required/>
  <div className="valid-feedback">
</div>
</div>
<div className="col-md-4">
  <label htmlFor="description1" className="form-label">Description</label>
  <input type="text" className="form-control" name='edescription' value={notevalue.edescription} onChange={onchange} id="description1"  required/>
  <div className="valid-feedback">
  </div>
</div>
<div className="col-md-4">
  <label htmlFor="tag1" className="form-label">Tag</label>
  <input type="text" className="form-control"  name='etag' value={notevalue.etag} onChange={onchange} id="tag1"  required/>
  <div className="valid-feedback">

  </div>
</div>

</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={Closeref} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={onclick}>update Note</button>
      </div>
    </div>
  </div>
</div>

{notes.map((note)=>{
return <Noteitem note={note} Editclick={Editclick} key={note._id} showalert={props.showalert}/>
})}
  
    </div>
  )
}

export default Note

