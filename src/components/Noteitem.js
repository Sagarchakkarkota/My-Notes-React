import React, { useContext } from 'react'
import Createcontext from '../Createcontext/Createcontext'

const Noteitem = (props) => {
 const context=useContext(Createcontext)
 const{DeleteNote}=context

   const{note, Editclick}=props
  return (
    <div>
      <div className="col-5 row-3 my-2 mx-5">
      <div className="card " >
      <i className="fa-solid fa-trash d-flex justify-content-end mx-2" onClick={()=>{DeleteNote(note._id);
props.showalert("Note Deleted successfully","success")
}}></i>
      <i className="fa-regular fa-pen-to-square  d-flex justify-content-end mx-2 my-2" onClick={()=>{Editclick(note)}}></i>
  <div className="card-body">

    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tag}</p>

  </div>
</div>
</div>
    </div>
  )
}

export default Noteitem
