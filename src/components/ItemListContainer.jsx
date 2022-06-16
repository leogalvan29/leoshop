import React from 'react'
import { useState } from 'react'
import styles from '../css/ItemListContainer.module.css'

const ItemListContainer = ({greeting,setGreeting}) => {

     const cambiaNombre = () =>{
         setGreeting('este es el componente de mensaje')
         return
     }
     

  return (
    <div className={styles.listContainer}>
        <h1>{greeting}</h1>
        <button onClick={cambiaNombre}>Cambia el nombre</button>
    </div>
  )
}

export default ItemListContainer