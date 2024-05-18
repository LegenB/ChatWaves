
import React, { useState } from 'react';
import { CyberStyle } from "../../Asset/Components/CyberStyle";
import { useForm } from "../../Hook/useForm";
import { createUser } from "../../Api/Register/CreateUser";



export const Register = () => {

    const [error, setError] = useState({})

    const {formState,onInputChange, nombre, email, password, fecha_nacimiento} = useForm({
        nombre: '',
        email: '',
        password: '',
        fecha_nacimiento:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        let validationError = {};

        if (!formState.nombre) validationError.nombre = 'El nombre es obligatorio';
        if (!formState.email) validationError.email = 'El email es obligatorio';
        if (!formState.password) validationError.password = 'La contraseña es obligatoria';
        if (!formState.fecha_nacimiento) validationError.fecha_nacimiento = 'La fecha de nacimiento es obligatoria';
    
        if (Object.keys(validationError).length > 0) {
            
            validationError.form = 'Campos Vacios';
            setError(validationError);
          
            return;
        }
        
        try {
            const data = await createUser(formState);
            console.log('Usuario registrado con éxito', data);
            setError({});

        } catch (error) {
            setError({ form: error.message });

        }
    };

  



    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='absolute inset-0 z-0'>
                <img src="https://i.ibb.co/CMZ8zt5/Fondo-Min.png" alt="Background" className="object-cover w-full h-full brightness-90" />
            </div>

           

                {/*Contenido */}
                <div className='absolute h-[600px] w-[500px] bg-zinc-900/95 drop-shadow-[0_5px_35px_rgba(34,235,242,0.50)] rounded-xl'></div>
                <div className='relative h-[600px] w-[500px] p-10 z-10  rounded-xl flex justify-center '>
                    
                    <CyberStyle />

                    <div className='w-full h-full'>                           
                        <div className='mb-11 flex justify-center'>
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

                        <form className='relative text-center text-white'
                            onSubmit={handleSubmit}
                            >

                            {error && (
                                <div className="absolute bottom-14 left-0 right-0  text-red-500 p-2 rounded ">
                                {error.form}
                                </div>
                                )}

                            <input 
                                type="text" 
                                placeholder="Name..." 
                                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.nombre ? 'shadow-red-500 border-red-500':'shadow-cyber-blue border-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                                name='nombre'
                                value={nombre}
                                onChange={onInputChange}
                                aria-label="Name"
                                
                            />
                                          

                            <input 
                                type="email" 
                                placeholder="Email..." 
                                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.email ? 'shadow-red-500 border-red-500':'shadow-cyber-blue border-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                aria-label="Email"
                                
                            />
                           

                            <input 
                                type="password" 
                                placeholder="Password..." 
                                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.password ? 'shadow-red-500 border-red-500':'shadow-cyber-blue border-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                aria-label="Password"
                            />
                    

                            <input 
                            type="date"  
                                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.fecha_nacimiento ? 'shadow-red-500 border-red-500':'shadow-cyber-blue border-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                                name='fecha_nacimiento'
                                value={fecha_nacimiento}
                                onChange={onInputChange}
                                aria-label="Date of Birth"
                            />
                            

                            
                            <button className='w-6/12 h-9 mt-16  bg-transparent   hover:scale-105 transition '
                                type="submit"
                                >
                                <div className='w-full h-full rounded-md'> 
                                    <span className="relative flex overflow-hidden w-full h-full  p-[2px] rounded-md">                                                                     
                                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e753f5_0%,#3bd5da_50%,#e753f5_100%)] ">
                                        </span> 
                                        <div className="inline-flex h-full w-full  items-center justify-center  bg-slate-900  font-medium text-white backdrop-blur-3xl rounded-md"> 
                                        
                                            Create an Account
                                        </div> 
                                    </span> 
                                </div>
                            </button>

                                    
                        </form>
                        <div className=' flex justify-center items-center  w-full mt-5'>
                            <a href="/login" className='text-gray-200 hover:text-cyber-blue drop-shadow-xl  hover:scale-105 transition'> I have an account</a>

                        </div>               
                    </div>
                </div>
        </div>
    )
}
