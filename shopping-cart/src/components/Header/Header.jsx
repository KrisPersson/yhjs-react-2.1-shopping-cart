import './Header.css'
import Cart from '../Cart/Cart'

function Header({ setProductsInCart, productsInCart }) {

    return (
        <header>
            <img src='/sherlock.png' />
            <Cart setProductsInCart={ setProductsInCart } productsInCart={ productsInCart } />
        </header>
    )
}

export default Header