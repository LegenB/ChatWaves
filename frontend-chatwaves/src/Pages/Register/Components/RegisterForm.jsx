import React, { useState } from 'react';

import { useForm } from "../../../Hook/useForm";
import { createUser } from "../../../Api/Register/CreateUser";

export const RegisterForm = () => {

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

        // Validar que los cambos este llenados antes de hacer la peticion
        if (!formState.nombre) validationError.nombre = 'El nombre es obligatorio';
        if (!formState.email) validationError.email = 'El email es obligatorio';
        if (!formState.password) validationError.password = 'La contraseña es obligatoria';
        if (!formState.fecha_nacimiento) validationError.fecha_nacimiento = 'La fecha de nacimiento es obligatoria';
        
        // Si los campos estan vacios no hacer la peticios y notificar al usuario
        if (Object.keys(validationError).length > 0) {
            
            validationError.form = 'Oops... we have Empty Fields!';
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
                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.nombre ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                name='nombre'
                value={nombre}
                onChange={onInputChange}
                aria-label="Name"
                
            />
                            

            <input 
                type="email" 
                placeholder="Email..." 
                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.email ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                name='email'
                value={email}
                onChange={onInputChange}
                aria-label="Email"
                
            />
            

            <input 
                type="password" 
                placeholder="Password..." 
                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.password ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                name='password'
                value={password}
                onChange={onInputChange}
                aria-label="Password"
            />
    

            <input 
            type="date"  
                className={`w-80 shadow-md  border-b rounded-full px-4 py-2 ${error.fecha_nacimiento ? 'shadow-red-500 border-red-500 hover:shadow-lg hover:shadow-red-500':'shadow-cyber-blue border-cyber-blue hover:shadow-lg hover:shadow-cyber-blue'}  bg-transparent  focus:outline-none mb-5`}
                name='fecha_nacimiento'
                value={fecha_nacimiento}
                onChange={onInputChange}
                aria-label="Date of Birth"
            />
            

            
            <button 
                className='w-6/12 h-9 mt-16  bg-transparent   hover:scale-105 transition '
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
    )
}
