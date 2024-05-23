import React, { useState } from 'react'
import { CyberStyle } from "../../Asset/Components/CyberStyle";
import { useForm } from "../../Hook/useForm";
import { LoginUser } from "../../Api/Login/LoginUser";


export const LoginForm = () => {
   

    const [error, setError] = useState({})
    const {formState,onInputChange, email, password} = useForm({
        email: '',
        password: '',
       
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        
        let validationError = {};

        // Validar que los cambos este llenados antes de hacer la peticion
        if (!formState.email) validationError.email = 'El email es obligatorio';
        if (!formState.password) validationError.password = 'La contraseña es obligatoria';
       
        
        // Si los campos estan vacios no hacer la peticios y notificar al usuario
        if (Object.keys(validationError).length > 0) {
            
            validationError.form = 'Oops... we have Empty Fields!';
            setError(validationError);
          
            return;
        }
        
        try {
            const data = await LoginUser(formState);
            console.log('inicio de sesión exitoso!', data);
            //setError({});

        } catch (error) {
            setError({ form: error.message });

        }
    };

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
                            <form className='text-center'
                                onSubmit={handleSubmit}
                            >
                                <input 
                                    type="email" 
                                    placeholder="Email..." 
                                    className={`w-60 font-Neuron shadow-md ${error.email ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  border-b rounded-lg px-2  bg-transparent focus:outline-none  transition text-white`}
                                    name='email'
                                    value={email}
                                    onChange={onInputChange}
                                />

                                <input 
                                    type="password" 
                                    placeholder="Password..." 
                                    className={`w-60 font-Neuron shadow-md ${error.password ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  mt-14 border-b rounded-lg px-2  bg-transparent focus:outline-none hover:shadow-lg hover:shadow-[rgb(34,235,242)] transition text-white`}
                                    name='password'
                                    value={password}
                                    onChange={onInputChange}
                                />

                                
                                
                                <div className='flex justify-start pl-24 mt-5'>
                                    <input type="checkbox" className='flex justify-start m'/>
                                    <label htmlFor="" className='pl-2 text-white font-Neuron'>Remember me</label>
                                </div>

                                <a href="/" className='flex justify-center pt-20 text-sm text-white font-Neuron'>Forgot your password?</a>
                                
                                {error && (
                                    <div className="absolute bottom-14 left-0 right-0  text-red-500 p-2 rounded ">
                                    {error.form}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className='button_login'>
                                        Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    )
}

