import ViewCart from '../ViewCart/ViewCart'

import './Cart.css'

function Cart({ removeProductFromCart, productsInCart }) {

    return (
        <article className='header__cart'>
            <p>Cart</p>
            <p className='products-in-cart'>{ productsInCart.length }</p>
            <input type="checkbox" />
            <ViewCart removeProductFromCart={ removeProductFromCart } productsInCart={ productsInCart } />
        </article>
    )
}

export default Cart