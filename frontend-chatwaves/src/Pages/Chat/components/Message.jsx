import React from 'react'





export const Message = ({name, hour, content}) => {




    return (

    <div className='bg-orange-200 rounded-lg  p-1 mb-3'>
        <div className=''>
            <div className='flex justify-between items-end'>
                <h2 className=' text-base'>
                    {name}
                </h2>
                <h3 className='text-sm text-gray-800'> 
                    {hour}
                </h3>
            </div>
            <div className=''>
                <p className='text-base'>
                    {content}
                </p>
            </div>
            

        </div>
    </div>


    )
}
