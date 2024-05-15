import React from 'react'

export const LoginForm = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='h-[600px] w-[500px] bg-slate-500 bg-opacity-60 rounded-xl flex justify-center p-10'>
                <div className='w-full h-full'>
                    <h1 className='text-center font-Saiba text-5xl drop-shadow-[0_5px_35px_rgba(40,119,48,1)] text-green-400 mb-10'>Login</h1>
                    <div>
                        <form className='text-center'>
                            <input type="email" placeholder="Email..." className='w-60 shadow-md shadow-green-300 border-b rounded-lg px-2 border-green-400 bg-transparent focus:outline-none'/>
                            <input type="password" placeholder="Password..." className='w-60 shadow-md shadow-green-300 mt-14 border-b rounded-lg px-2 border-green-500 bg-transparent focus:outline-none'/>
                            
                            <button className='w-6/12 h-7 mt-28 rounded-md border-2 bg-transparent border-green-500 shadow-md shadow-green-300'>Sign In</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

