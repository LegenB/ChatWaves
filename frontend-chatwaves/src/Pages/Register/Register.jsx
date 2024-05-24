import { CyberStyle } from "../../Asset/Components/CyberStyle";
import { RegisterForm } from "./Components/RegisterForm";



export const Register = () => {


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
                        <RegisterForm/>
                        
                        <div className=' flex justify-center items-center  w-full mt-5'>
                            <a href="/login" className='text-gray-200/80 hover:text-cyber-blue drop-shadow-xl  hover:scale-105 transition'> I have an account</a>

                        </div>               
                    </div>
                </div>
        </div>
    )
}
