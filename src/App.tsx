import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './header';
import MainLayout from "./mainLayout"
import ProductDetails from "./productDetail"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='product/:id' element={<ProductDetails/>} /> 
      </Routes>
    </>
  )
}

export default App
