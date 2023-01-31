import './Product.css'

function Product({ title, author, info, addProductToCart, i } ) {


    return (
        <article id={ title } key={ i } className='product'>
            <h3>{ title }</h3>
            <h4>av { author }</h4>
            <p>{ info }</p>
            <button onClick={ (event) => addProductToCart(event) }>Add to cart</button>
        </article>
    )
}

export default Product