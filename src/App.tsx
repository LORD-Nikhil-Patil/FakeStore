import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import MainLayout from "./mainLayout"



function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<MainLayout/>}/>
     </Routes>
    </>
  )
}

export default App
