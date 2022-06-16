import React from 'react'
import { useState } from 'react'
import styles from '../css/Header.module.css'
import logo from '../logo192.png'
import menu from '../menu.png'
import CartWidget from './CartWidget'



const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)

     const menuAbrir = () => {
       setMenuOpen(true) 
      
       if(menuOpen === true) {
          setMenuOpen(false)
       } else{
          
       }
       }
       
     
   
    
  return (
    <>
       <div className={styles.header}>
              <div className={styles.contenido_navegacion}> 
                  <div className={styles.logo}>
                      <img src={logo} alt="" />
                  </div>

                  <div className={styles.nav}>
                      <ul>
                        <li><a href="" className="enlace">Inicio</a></li>
                        <li><a href="" className="enlace">Nosotros</a></li>
                        <li><a href="" className="enlace">Productos</a></li>
                        <li><a href="" className="enlace">Contacto</a></li>
                      </ul>
                        
                        
                        
                  </div>

                  {menuOpen ? (     <div className={styles.navFlyOpen}>
                      <ul>
                        <li><a href="" className="enlace">Inicio</a></li>
                        <li><a href="" className="enlace">Nosotros</a></li>
                        <li><a href="" className="enlace">Productos</a></li>
                        <li><a href="" className="enlace">Contacto</a></li>
                      </ul>
                        
                        
                        
                  </div>) :      <div className={styles.navFly}>
                      <ul>
                        <li><a href="" className="enlace">Inicio</a></li>
                        <li><a href="" className="enlace">Nosotros</a></li>
                        <li><a href="" className="enlace">Productos</a></li>
                        <li><a href="" className="enlace">Contacto</a></li>
                      </ul>
                        
                        
                        
                  </div>}


                  

                  <div className={styles.navMovil}>
                     <CartWidget/>
                     <img src={menu} alt=""  onClick={menuAbrir}/>
                    
                  </div>

              </div>
       </div>
    </>
  )
}

export default Header