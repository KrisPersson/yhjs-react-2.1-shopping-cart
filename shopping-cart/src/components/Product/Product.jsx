import './Product.css'

function Product(props) {

    const { title, author, info } = props

    return (
        <article className='product'>
            <h3>{ title }</h3>
            <h4>av { author }</h4>
            <p>{ info }</p>
            <button>Add to cart</button>
        </article>
    )
}

export default Product