import React from 'react'
import Note from './Note'

const Home = (props) => {
const {showalert}=props
  return (
    <div>
     <Note showalert={showalert} />
    </div>
  )
}

export default Home
