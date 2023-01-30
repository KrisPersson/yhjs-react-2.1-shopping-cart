import './Header.css'
import Cart from '../Cart/Cart'

function Header({ removeProductFromCart, productsInCart }) {

    return (
        <header>
            <img src='/sherlock.png' />
            <Cart removeProductFromCart={ removeProductFromCart } productsInCart={ productsInCart } />
        </header>
    )
}

export default Header