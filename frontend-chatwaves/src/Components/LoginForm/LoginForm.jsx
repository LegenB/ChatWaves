import React from 'react'

export const LoginForm = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='h-[600px] w-[500px] bg-slate-500 rounded-xl flex justify-center p-10'>
                <div className='w-full h-full'>
                    <h1 className='text-center font-Saiba-Outline text-5xl text-green-400'>Login</h1>
                    <div>
                    <form className=''>
                        <label htmlFor='' className='' >Email</label>
                        <input type="email" placeholder='Email...' />

                        
                        <div className='flex justify-between'>
                            <label htmlFor="Password">Password</label>
                            <input type="password" /> 
                        </div>
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
