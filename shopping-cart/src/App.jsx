import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product'



function App() {
  const [productsInCart, setProductsInCart] = useState([])

  return (
    <div className="App">
      <Header productsInCart={ productsInCart } setProductsInCart={ setProductsInCart }  />
      <section className='product-container'>
        <Product productsInCart={ productsInCart } setProductsInCart={ setProductsInCart } title='A Sign of Four' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product productsInCart={ productsInCart } setProductsInCart={ setProductsInCart } title='A Study in Scarlet' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product productsInCart={ productsInCart } setProductsInCart={ setProductsInCart } title='Baskervilles Hound' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
        <Product productsInCart={ productsInCart } setProductsInCart={ setProductsInCart } title='The Adventures of Sherlock Holmes' author='Sir Arthur Conan Doyle' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' />
      </section>
      
      
    </div>
  )
}

export default App
