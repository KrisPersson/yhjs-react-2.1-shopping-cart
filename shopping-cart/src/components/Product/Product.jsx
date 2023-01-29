import './Product.css'

function Product(props) {

    const { title, author, info, productsInCart, setProductsInCart } = props

    function addProductToCart(event) {
        const target = event.target.parentNode.id

        if (productsInCart.indexOf(target) === -1) {
            setProductsInCart([...productsInCart, target])
        }
        console.log(productsInCart);
    }

    return (
        <article id={ title } className='product'>
            <h3>{ title }</h3>
            <h4>av { author }</h4>
            <p>{ info }</p>
            <button onClick={ (event) => addProductToCart(event) }>Add to cart</button>
        </article>
    )
}

export default Product