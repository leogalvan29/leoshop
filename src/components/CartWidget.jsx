import React from 'react'
import shopping from '../shopping-bag.png'
import styles from '../css/CartWidget.module.css'

const CartWidget = () => {
  return (
    <div className={styles.cart}>
        <img src={shopping} alt="" className={styles.cartIcon} />
    </div>
  )
}

export default CartWidget