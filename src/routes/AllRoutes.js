import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, CartPage, Dashboard, OrderPage, PageNotFound } from '../pages'
import { ProductList, ProductDetail, Register, Login  } from '../pages';
import { ProtectedRoute } from './ProtectedRoute';


export const AllRoutes = () => {
  // const token = false
    
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}  />
            <Route path='/products' element={<ProductList /> } />
            <Route path='/products/:id' element={<ProductDetail /> } />
            <Route path='/register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>  } />
            <Route path='/order-summary' element={<ProtectedRoute><OrderPage /></ProtectedRoute>  } />
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
            <Route path='*' element={<PageNotFound /> }/>

            

        </Routes>
    </div>
  )
}
