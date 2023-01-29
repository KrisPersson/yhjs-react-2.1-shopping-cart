import { useState } from 'react'

import ViewCart from '../ViewCart/ViewCart'

import './Cart.css'



function Cart({ productsInCart, setProductsInCart }) {


    return (
        <article className='header__cart'>
            <p>Cart</p>
            <p className='products-in-cart'>{ productsInCart.length }</p>
            <ViewCart setProductsInCart={ setProductsInCart } productsInCart={ productsInCart } />
        </article>
    )
}

export default Cart