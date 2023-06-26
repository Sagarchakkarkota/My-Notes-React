import React, { useState } from 'react'
import Createcontext from './Createcontext'

const Statecontext = (props) => {
const [notes,setNotes]=useState([])

const getnotes=async()=>{
const response= await fetch("http://localhost:5000/api/notes/fetchallnotes",{
  method:'GET',
  headers:{
    "Content-Type":"application/json",
    "auth-token":localStorage.getItem('token')
  }

})
const json= await response.json()
setNotes(json)
console.log(notes)
}

// addnote
const AddNote=async( title ,description , tag )=>{
  const response= await fetch("http://localhost:5000/api/notes/addnote",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem("token")
    },
    body:JSON.stringify( title , description , tag )
  })
  const json= await response.json()

setNotes(notes.concat(json))
}

const DeleteNote=async(id)=>{

  const response= await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{
    method:'DELETE',
    headers:{
      "Content-Type":"application/json",
      "auth-token": localStorage.getItem('token')

    }
    }  )
  const json = await response.json()
   console.log(json)
   const newnote=notes.filter((value)=>{
    return value._id!==id })
    setNotes(newnote)
}

// edit note
   const EditNote=async(id,title,description,tag)=>{
    const response= await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({title: title, description: description, tag: tag})

    })
  

    const json=await response.json()
console.log(json)

const Newnotes=JSON.parse(JSON.stringify(notes))
for(let i=0; i<Newnotes.length; i++){
  const element=Newnotes[i]
  if(element._id===id){
Newnotes[i].title=title;
Newnotes[i].description=description;
Newnotes[i].tag=tag
break;
  }
}
setNotes(Newnotes)
  } 

  return (


    <div>
 <Createcontext.Provider value={{notes, getnotes, AddNote, DeleteNote, EditNote}}>
 {props.children}

 </Createcontext.Provider>
   
    </div>
  )
}

export default Statecontext
