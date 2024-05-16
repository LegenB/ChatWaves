import React from 'react'
import { CyberStyle } from "../../Asset/Components/CyberStyle";
export const LoginForm = () => {
    const bg_image = 'https://i.ibb.co/CMZ8zt5/Fondo-Min.png'
    
    return (
        <div className='flex justify-center items-center  w-screen h-screen'>

            <div className='flex justify-center items-center'>
                <div className='absolute inset-0 z-0'>
                        <img src={bg_image} alt="Background" className="object-cover w-full h-full brightness-90" />
                </div>
                <div className="absolute inset-0 z-10 bg-transparent"></div>
                <div className='absolute h-[600px] w-[500px] bg-zinc-900/95 drop-shadow-[0_5px_35px_rgba(34,235,242,0.50)] text-[rgb(34,235,242)] rounded-xl flex justify-center p-10'></div>
                <div className='relative z-20 h-[600px] w-[500px] p-10'>
                <CyberStyle color={'#e753f5'}/>
                    <div className='w-full h-full'>
                        <div className='flex justify-center'>
                            <span className='text-center font-Saiba text-5xl drop-shadow-[0_5px_35px_rgba(34,235,242,1)] text-[#22ebf2] mb-10'>L</span>
                            <span className='text-center font-Saiba text-5xl drop-shadow-[0_5px_35px_rgba(34,235,242,1)] text-[rgb(34,235,242)] mb-10'>o</span>
                            <span className='text-center font-Saiba text-5xl drop-shadow-[0_5px_35px_rgba(34,235,242,1)] text-[rgb(34,235,242)] mb-10'>g</span>
                            <span id='parpadeo_rosa' className='text-center font-Saiba text-5xl drop-shadow-[0_5px_35px_rgba(236,72,153,1)] text-[#e753f5] mb-10'>in</span>
                        </div>
                        <div>
                            <form className='text-center'>
                                <input type="email" placeholder="Email..." className='w-60 font-Neuron shadow-md shadow-[rgb(34,235,242)] border-b rounded-lg px-2 border-green-400 bg-transparent focus:outline-none hover:shadow-lg hover:shadow-[rgb(34,235,242)] transition'/>
                                <input type="password" placeholder="Password..." className='w-60 font-Neuron shadow-md shadow-[rgb(34,235,242)] mt-14 border-b rounded-lg px-2 border-green-500 bg-transparent focus:outline-none hover:shadow-lg hover:shadow-[rgb(34,235,242)] transition'/>
                                <div className='flex justify-start pl-24 mt-5'>
                                    <input type="checkbox" className='flex justify-start m'/>
                                    <label htmlFor="" className='pl-2 text-white font-Neuron'>Remember me</label>
                                </div>
                                <a href="/" className='flex justify-center pt-20 text-sm text-white font-Neuron'>Forgot your password?</a>
                                
                                <button className='button_login'>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    )
}

