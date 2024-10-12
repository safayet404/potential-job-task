import React from 'react'
import Textbox from './Textbox'
import Button from './Button'

const Contact = () => {
    return (
        <div data-aos="fade-right" id="scrollToContact" className='w-full flex justify-center mt-10'>
            <div className='w-full max-w-[1500px] flex flex-col  items-center justify-center'>

                <div className='flex flex-col justify-center w-full items-center text-center'>
                <span className='dark:text-white text-[25px] lg:text-[40px] md:text-[40px] font-bold'>Let's Design Together</span>
                    <span className='dark:text-white w-[70%] text-xs sm:text-xs lg:text-base md:text-sm '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora,
                        assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur.
                    </span>
                </div>

                <div className='grid grid-cols-12 justify-center items-center mt-10 gap-x-2' >
                    <div className='lg:col-span-9 md:col-span-9 sm:col-span-9 col-span-12' >

                        <Textbox className="bg-white rounded-lg lg:w-[520px] md:w-[520px] sm:w-[450px] w-[250px]" placeholder="Enter Your Email" />
                    </div>
                    <div className='lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-12 items-center justify-center text-center sm:mt-0 lg:mt-0 md:mt-0 mt-5'>
                        <button className='font-bold bg-[#FD6F00] pb-[12px] pt-[12px] pr-[30px] pl-[30px] rounded-lg text-white '> Contact Me </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact