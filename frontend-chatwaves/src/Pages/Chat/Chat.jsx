import React from 'react'
import { Message } from "./components/Message";



export const Chat = () => {


    return (

        <div className='bg-slate-800 w-screen h-screen'>

            <div className='flex justify-center items-center min-h-screen'>

                <div className='h-[700px] w-[400px] border bg-slate-600 flex flex-col'>

                    <div className='w-full bg-slate-700 h-9 flex justify-center items-center'>
                        <h1 className='text-white'>Chat global</h1>
                    </div>

                    <div className='w-full bg-slate-500 flex-grow p-2'>
                        
                        <Message name={'Byron'} hour={'20:52'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt, eos exercitationem enim nostrum nemo non a laboriosam numquam quis eum atque, laborum quasi. Fugiat eveniet itaque corrupti perspiciatis suscipit?'}/>
                        <Message name={'Byron'} hour={'20:53'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt, eos exercitationem enim nostrum nemo non a laboriosam numquam quis eum atque, laborum quasi. Fugiat eveniet itaque corrupti perspiciatis suscipit?'}/>
                        <Message name={'Yato'} hour={'20:54'} content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt, eos exercitationem enim nostrum nemo non a laboriosam numquam quis eum atque, laborum quasi. Fugiat eveniet itaque corrupti perspiciatis suscipit?'}/>
                      
                    </div>

                    <div className='w-full h-10'>
                        <button>IA</button>
                        <input type="text" placeholder='Escribe algo ...' className='w-full h-full p-4 '/>
                    </div>

                </div>
            </div>
            


        </div>
    )
}
