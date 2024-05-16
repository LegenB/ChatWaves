import React from 'react'

import { CyberStyle } from "../../Asset/Components/CyberStyle";




export const Register = () => {



    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='absolute inset-0 z-0'>
                <img src="https://i.ibb.co/CMZ8zt5/Fondo-Min.png" alt="Background" className="object-cover w-full h-full brightness-90" />
            </div>

            <div> 
                <span className="relative flex overflow-hidden  p-[2px]">                                                                     
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e753f5_0%,#3bd5da_50%,#e753f5_100%)] ">
                    </span> 
                    <div className="inline-flex h-full w-full  items-center justify-center  bg-slate-900 text-sm font-medium text-white backdrop-blur-3xl"> 

                        {/*Contenido */}
                        <div className='relative h-[600px] w-[500px] p-10 z-10   rounded-xl flex justify-center '>
                            
                            <CyberStyle />

                            <div className='w-full h-full'>                           
                                <div className='mb-20 flex justify-center'>
                                    <div className='relative z-10  border-2 rounded-bl-full rounded-tr-full border-cyber-pink bg-zinc-900/90 w-full h-14'>
                                        <div  id='parpadeo_azul_8' className='absolute z-0 rounded-bl-full rounded-tr-full shadow-inner  shadow-cyber-blue w-full h-full'>
                                            
                                        </div>
                                        <h1 className='text-center text-5xl text-cyber-blue mb-10'>
                                                <span className=' font-Saiba'>R</span>
                                                <span id='parpadeo_azul' className=' font-Saiba'>e</span   >
                                                <span className=' font-Saiba'>g</span>
                                                <span id='parpadeo_rosa' className=' font-Saiba '>i</span>
                                                <span className=' font-Saiba  text-cyber-pink'>s</span>
                                                <span className=' font-Saiba  text-cyber-pink'>t</span> 
                                                <span className=' font-Saiba'>e</span>
                                                <span className=' font-Saiba'>r</span> 
                                            </h1>


                                        
                                    </div>
                                </div>

                                <form className='text-center text-white  '>
                                    <input type="email" placeholder="Name..." className='w-72 shadow-md  border-b rounded-lg px-2 py-2 border-cyber-pink bg-cyber-blue/20 focus:outline-none mb-5'/>
                                    <input type="email" placeholder="Email..." className='w-72 shadow-md  border-b rounded-lg px-2 py-2 border-cyber-pink bg-cyber-blue/20 focus:outline-none mb-5'/>
                                    <input type="password" placeholder="Password..." className='w-72 shadow-md  border-b rounded-lg px-2 py-2 border-cyber-blue bg-cyber-blue/20 focus:outline-none mb-5'/>
                                    <input type="date"  className='w-72 shadow-md  border-b rounded-lg px-2 py-2 border-cyber-blue bg-cyber-blue/20 focus:outline-none mb-5'/>

                                    <button className='w-6/12 h-9 mt-16 rounded-md border-2 bg-transparent border-cyber-pink/80 shadow-sm hover:bg-cyber-pink/20 hover:scale-110 transition hover:shadow-cyber-pink'>
                                        Sign In
                                    </button>
                                </form>

                                    
                            </div>
                        </div>
                        {/*Fin de contenido*/} 

                    </div> 
                </span> 
            </div>

        </div>
    )
}
