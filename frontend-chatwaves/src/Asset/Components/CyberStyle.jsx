import React from 'react'

export const CyberStyle = ({color}) => {


    let bg_color =''
    let br_color =''
    switch (color) {
        case 'blue':
            bg_color ='bg-cyber-blue/50'
            br_color = 'border-cyber-blue/50'
            break;
    
        default:
            bg_color ='bg-cyber-pink/50'
            br_color = 'border-cyber-pink/50'
            break;
    }



    return (
        <>
            

            <span className={`absolute ${bg_color} w-2  h-2 rounded-full z-20 top-2 left-5 `}></span>
            <span className={`absolute ${bg_color} w-2  h-2 rounded-full z-20 top-2 left-10 `}></span>
            <span className={`absolute ${bg_color} w-2  h-2 rounded-full z-20 top-2 left-[60px] `}></span>
            <span className={`absolute ${bg_color} w-2  h-2 rounded-full z-20 top-2 left-[80px]`}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[23px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[36px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[49px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[62px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[75px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[88px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[101px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[114px] left-2 `}></span>
            <span className={`absolute ${bg_color} w-8  h-2  z-20 bottom-[10px] left-2 `}></span>

            <span className={`absolute bottom-2 right-2 w-0 h-0 border-l-[45px] border-l-transparent border-r-[0px] border-r-transparent border-b-[45px] ${br_color} `}></span>
            
            <span className={`absolute top-1/2 right-2 transform -translate-y-1/2 ${bg_color}  rounded-full w-1 h-2/5 z-20 `}></span>
        </>
    )
}
