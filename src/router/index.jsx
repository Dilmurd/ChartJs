import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/dashboard/Dashboard'
import Login from '@/pages/login/Login'
import Auth from '@/pages/auth/Auth'
import ManageProduct from '@/pages/dashboard/manage-product/ManageProduct'
import Order from '@/pages/dashboard/order/Order'
import Comment from '@/pages/dashboard/comment/Comment'
import Profile from '@/pages/dashboard/profile/Profile'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='/' element={<Auth/>}>
              <Route path='dashboard' element={<Dashboard/>}>
                <Route path='manage-product' element={<ManageProduct/>}/>
                <Route path='order' element={<Order/>}/>
                <Route path='comment' element={<Comment/>}/>
                <Route path='profile' element={<Profile/>}/>
              </Route>
            </Route>
        </Routes>
    </>
  )
}

export default Router