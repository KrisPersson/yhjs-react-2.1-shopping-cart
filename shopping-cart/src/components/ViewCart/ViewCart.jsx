import "./ViewCart.css"

function ViewCart({ setProductsInCart, productsInCart }) {

    function removeProductFromCart(event) {
        const target = event.target.parentNode
        console.log(target)

    }

    
    const liElements = productsInCart.map(item => <li><span>{ item }</span><a onClick={ (event) => removeProductFromCart(event) } href="#">-</a></li>)
       

    


    return(
        <section class='cart-opened'>
            <h3>Products in cart</h3>
            <ul>
                {liElements}
            </ul>
        </section>
        
    )
}

export default ViewCart