import React from 'react';
import Nav from './Component/Nav.jsx'
import Product from './Component/Product.jsx'
import ProductDetails from './Component/ProductDetails.jsx'

function App() {
  return (
    <>
      <Nav />
      <div className='product-container'>
        <Product />
        <ProductDetails/>
      </div>
      
    </>
  );
}

export default App;