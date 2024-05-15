import React from 'react'
import bg01 from "../../img/UI_Elemnts/border_01.png";




export const Register = () => {



    return (
        <div className='flex justify-center items-center'>
        <div className='h-[600px] w-[500px] bg-zinc-900 border-2 border-green-400 bg-opacity-60 rounded-xl flex justify-center p-10'>
            <div className='w-full h-full'>
                <div className='mb-20 flex justify-center'>
                    <div className='  border-2 rounded-bl-full rounded-tr-full border-green-400 bg-zinc-950/90 shadow-inner  shadow-emerald-700 w-full h-14'>

                        <h1 className='text-center text-5xl text-green-500 mb-10'>
                            <span className=' font-Saiba'>R</span>
                            <span className=' font-Saiba'>e</span   >
                            <span className=' font-Saiba'>g</span>
                            <span className=' font-Saiba-Outline text-green-300'>i</span>
                            <span className=' font-Saiba-Outline text-green-300'>s</span>
                            <span className=' font-Saiba-Outline text-green-300'>t</span> 
                            <span className=' font-Saiba'>e</span>
                            <span className=' font-Saiba'>r</span> 
                        </h1>
       
                    </div>
                </div>
               
                
                
                <div>
                    <form className='text-center'>
                        <input type="email" placeholder="Email..." className='w-60 shadow-md shadow-green-300/80 border-b rounded-lg px-2 py-1 border-green-400 bg-transparent focus:outline-none'/>
                        <input type="password" placeholder="Password..." className='w-60 shadow-md shadow-green-300/80 mt-14 border-b rounded-lg px-2 py-1 border-green-500 bg-transparent focus:outline-none'/>
                        
                        <button className='w-6/12 h-7 mt-28 rounded-md border-2 bg-transparent border-green-500 shadow-md shadow-green-300'>Sign In</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
    )
}
