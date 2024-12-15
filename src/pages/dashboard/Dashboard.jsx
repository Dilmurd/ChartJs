import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
        <div id='dashboard-sidebar' className='w-[264px] h-screen bg-slate-900 p-5 sticky top-0 left-0 overflow-auto text-white '>
          <p className='text-2xl font-bold mb-8'>Dashboard</p>
          <ul>
            <li>
              <NavLink className={` block p-3 mb-2 rounded-md`} to={"manage-product"}>Manage Product</NavLink>
            </li>
            <li>
              <NavLink className={` block p-3 mb-2 rounded-md`} to={"order"}>Orders</NavLink>
            </li>
            <li>
              <NavLink className={` block p-3 mb-2 rounded-md`} to={"comment"}>Comments</NavLink>
            </li>
            <li>
              <NavLink className={` block p-3 mb-2 rounded-md`} to={"profile"}>Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className='flex-1 p-5'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard