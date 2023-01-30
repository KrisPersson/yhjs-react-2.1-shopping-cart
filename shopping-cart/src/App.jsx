import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'



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
  

  return (
    <div className="App">
      <Header removeProductFromCart={ removeProductFromCart } productsInCart={ productsInCart }  />
      <section className='product-container'>
        <Product addProductToCart={ addProductToCart } title='A Sign of Four' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product addProductToCart={ addProductToCart } title='A Study in Scarlet' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product addProductToCart={ addProductToCart } title='Baskervilles Hound' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product addProductToCart={ addProductToCart } title='The Adventures of Sherlock Holmes' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
      </section>
      
      
    </div>
  )
}

export default App
