import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Products from '../Pages/Products'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Login />} />
            <Route path='/products' element={<Products />} />
        </Routes>
    </div>
  )
}

export default Allroutes