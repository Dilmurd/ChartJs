import { useStore } from '@/zustand'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const onLogin = useStore(state => state.login)
  const navigate = useNavigate()
  const handleLogin = () => {
    onLogin("alksncoasnoicnadsoinjsaiojdoiasjdasiojd")
    navigate("/dashboard")
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(ok);
    
  }
  return (
    <div className='border border-red-500 w-[300px] mx-auto my-[150px] flex flex-col px-[10px] py-[30px]'>
      <form action="" onSubmit={handleSubmit} className='flex flex-col'>
      <h1 className='text-center mb-[10px] text-[20px]'>Login</h1>
      <label htmlFor="" className='text-pink-500 mb-[2px]'>Username</label>
      <input type="text" required className='border mb-1 px-[10px] text-[#000] outline-none' />
      <label htmlFor="" className='text-pink-500 mb-[2px] mt-[4px]'>Password</label>
      <input type="password" required className='border px-[10px] text-[#000] outline-none'/>
      <button onClick={handleLogin} className='border border-[#ddd] mt-[20px] bg-[pink] text-[#fff]'>Log in</button>
      </form>

    </div>
  )
}

export default Login