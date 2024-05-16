import React from 'react'
import br_01 from "../../Asset/img/UI_Elemnts/border_01.png";
import { Link} from 'react-router-dom';


export const Home = () => {

    return (

        <div className='flex justify-center items-center w-screen h-screen bg-slate-800'>

            <div className='flex justify-center items-center w-[350px] h-[200px] rounded-xl bg-slate-700 p-7'>
                <img src={br_01} alt=""  className='absolute  h-[200px] w-[350px] z-0'/>
                <div className='w-full  z-10'>                 
                    <h1 className='text-cyber-blue font-Saiba text-5xl text-center'>
                        Ho
                        <span id='parpadeo_rosa' className='text-cyber-pink font-s'>me</span>
                    </h1>

                    <div className='mt-4 flex justify-between '>
                        <Link to="/login" className='flex justify-center items-center w-28 border-2 border-cyber-blue bg-slate-900 rounded-xl p-2 text-cyber-pink font-Saiba '>
                           Login
                        
                        </Link>
                        <Link to="/register" className='flex justify-center items-center w-28 border-2 border-cyber-pink bg-slate-900 rounded-xl p-2 text-cyber-blue font-Saiba '>
                            Register              
                        </Link>
                    </div>  
      
                </div>
               
               

            </div>
        
        </div>

    )
}
