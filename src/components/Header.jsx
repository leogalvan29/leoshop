import React from 'react'
import { useState } from 'react'

const Header = ({nombre,setNombre}) => {
    const handleSubmit = (e) => {
       e.preventDefault()
       setNombre()
    }
  return (
    <div>
        <p>{nombre}</p>
        <form action={handleSubmit}>
            <input type="text" 
             id='nombre'
             onChange={(e)=> setNombre(e.target.value)}
             
            
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Header