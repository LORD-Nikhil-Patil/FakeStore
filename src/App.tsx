import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './header';
import MainLayout from "./mainLayout";
import ProductDetails from "./productDetail";
import ShoppingCart from "./cart"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='product/:id' element={<ProductDetails/>} /> 
        <Route path='cart' element={<ShoppingCart/>} />
      </Routes>
    </>
  )
}

export default App
