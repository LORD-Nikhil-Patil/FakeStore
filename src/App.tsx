import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import MainLayout from "./mainLayout"
import Header from './header';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </>
  )
}

export default App
