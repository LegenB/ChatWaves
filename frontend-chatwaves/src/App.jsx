import React from 'react'
import { Outlet } from 'react-router-dom';
import { AuthProvider  } from './context/Auth.context';

export const App = () => {
    return (
      <AuthProvider >
        <Outlet/>
      </AuthProvider >
      

    )
}
