import React, { useEffect, useState } from 'react'
import { Message } from "./components/Message";
import { GetGlobalMessages } from "../../Api/Chat/getGlobalMessages";
import { AuthContext } from '../../context/Auth.context';
import { useContext } from 'react';



export const Chat = () => {
    const [messages, setMessages] = useState([])
    const { user } = useContext(AuthContext);


    useEffect(() => {
      
        console.log(user)
        try {
            GetGlobalMessages()
                .then( messages =>{
                    console.log(messages)
                    setMessages(messages)
                });
        } 
        catch (error) {
            
        }
    }, [ ])


    
    

    return (

        <div className='bg-slate-800 w-screen h-screen'>

            <div className='flex justify-center items-center min-h-screen'>

                <div className='h-[700px] w-[400px] border bg-slate-600 flex flex-col'>

                    <div className='w-full bg-slate-700 h-9 flex justify-center items-center'>
                        <h1 className='text-white'>Chat global</h1>
                    </div>

                    <div className='w-full bg-slate-500 flex-grow p-2'>
                        
                        {messages.map( (M) =>(
                            
                            <Message key={M.id_mesaje} name={M.usuario_id_usuario} hour={M.fecha_envio} content={M.contenido}/>
                            
                        
                        ))}
                        
                      
                    </div>

                    <div className='w-full h-10'>
                        
                        <input type="text" placeholder='Escribe algo ...' className='w-full h-full p-4 '/>
                    </div>

                </div>
            </div>
            


        </div>
    )
}
