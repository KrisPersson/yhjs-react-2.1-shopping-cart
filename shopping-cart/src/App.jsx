import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Product from './components/Product/Product'

const allProducts = [
  {title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
]

function App() {
  const [productsInCart, setProductsInCart] = useState([])
  

  function addProductToCart(event) {
    const target = event.target.parentNode.id

    if (productsInCart.indexOf(target) === -1) {
        setProductsInCart([...productsInCart, target])
    }
  }

  function removeProductFromCart(event) {
    const target = event.target.parentNode.childNodes[0].textContent
    setProductsInCart(productsInCart.filter(product => product !== target))
  }

  const renderProducts = allProducts.map((product, i) => { 
    return (
    <Product 
      addProductToCart={ addProductToCart }  
      title={ product.title }
      author={ product.author }
      info={ product.info }
      key={ i }
      /> 
  )
  })
  
  return (
    <div className="App">
      <Header removeProductFromCart={ removeProductFromCart } productsInCart={ productsInCart }  />
      <section className='product-container'>
        { renderProducts }
      </section>
    </div>
  )
}

export default App
