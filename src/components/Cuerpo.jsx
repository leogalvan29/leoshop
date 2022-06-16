import React from 'react'
import Card from './Card'
import styles from '../css/Cuerpo.module.css'

const Cuerpo = () => {
  return (
    <div className={styles.contenedorCards}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Cuerpo