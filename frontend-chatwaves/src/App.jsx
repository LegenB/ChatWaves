import React from 'react'
import { LoginForm } from './LoginForm/LoginForm'
import { Register } from './Register/Register'

export const App = () => {
    return (
      <div className='w-screen h-screen text-white flex justify-center  bg-white dark:bg-slate-800'>
        <LoginForm/>
      </div>
    
    )
}
