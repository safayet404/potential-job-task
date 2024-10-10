import React from 'react'
import Textbox from './Textbox'
import Button from './Button'

const Contact = () => {
    return (
        <div className='w-full flex justify-center mt-10'>
            <div className='w-full max-w-[1500px] flex flex-col  items-center justify-center'>

                <div className='flex flex-col justify-center w-full items-center text-center'>
                    <span className='dark:text-white text-[40px] font-bold '>Lets Design Together</span>

                    <span className='dark:text-white lg:w-[50%] mt-3'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora,
                        assumenda quod, cum repellat,dio pariatur.
                    </span>
                </div>

                <div className='grid grid-cols-12 justify-center items-center mt-10 gap-x-2' >
                    <div className='col-span-9'>

                        <Textbox className="bg-white rounded-lg w-[520px]" placeholder="Enter Your Email" />
                    </div>
                    <div className='col-span-3'>
                        <button className='font-bold bg-[#FD6F00] pb-[12px] pt-[12px] pr-[30px] pl-[30px] rounded-lg text-white '> Contact Me </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact