import "./ViewCart.css"

function ViewCart({ removeProductFromCart, productsInCart }) {
    if (productsInCart.length > 0) {
    }
    const liElements = productsInCart.map((item, i) => <li key={ i }><span>{ item }</span><a onClick={ (event) => removeProductFromCart(event) } href="#">-</a></li>)
       
    return(
        <section className='cart-opened'>
            <h3>Products in cart</h3>
            <ul>
                {productsInCart.length > 0 ? liElements : <h4>No products in cart</h4>}
            </ul>
        </section>
    )
}

export default ViewCart