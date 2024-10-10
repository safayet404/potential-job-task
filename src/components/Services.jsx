import React from 'react';
import app from '../assets/app.svg'
import ui from '../assets/ui.svg'
import web from '../assets/web.svg'
import graphics from '../assets/graphics.svg'
const Services = () => {
    return (
        <div data-aos="fade-left" id="scrollToService" className='w-full flex justify-center mt-5'>
            <div className='w-full max-w-[1500px] flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center w-full text-center mb-8'>
                    <span className='dark:text-white text-[30px] lg:text-[40px] md:text-[40px] font-bold'>Services</span>
                    <span className='dark:text-white w-[70%] text-sm lg:text-base md:text-base '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora,
                        assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur.
                    </span>
                </div>

                <div className='flex flex-wrap justify-center gap-5 mt-5'>

                    <div className=' bg-[#ebebeb] dark:bg-white m-5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start w-full md:w-[300px]'>
                        <div className='text-4xl mb-4'>
                        <img src={ui} alt="Graphics" className="w-16 h-16 mb-4" /> 
                        </div>
                        <h3 className="text-2xl font-bold mb-2 dark:text-black">UI/UX</h3>
                        <p className="text-gray-600 dark:text-black  ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolor.
                        </p>
                    </div>
                    <div className=' bg-[#ebebeb] dark:bg-white  m-5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start w-full md:w-[300px]'>
                        <div className='text-4xl mb-4'>
                        <img src={web} alt="Graphics" className="w-16 h-16 mb-4" /> 
                        </div>
                        <h3 className="text-2xl font-bold mb-2  dark:text-black">Web Design</h3>
                        <p className="text-gray-600 dark:text-black  ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolor.
                        </p>
                    </div>
                    <div className='dark:bg-white bg-[#ebebeb]  m-5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start w-full md:w-[300px]'>
                        <div className='text-4xl mb-4'>
                        <img src={app} alt="Graphics" className="w-16 h-16 mb-4" /> 
                        </div>
                        <h3 className="text-2xl font-bold mb-2 dark:text-black">App Design</h3>
                        <p className="text-gray-600 dark:text-black  ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolor.
                        </p>
                    </div>
                    <div className='dark:bg-white bg-[#ebebeb]  m-5 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start w-full md:w-[300px]'>
                        <div className='text-4xl mb-4'>
                        <img src={graphics} alt="Graphics" className="w-16 h-16 mb-4" /> 
                        </div>
                        <h3 className="text-2xl font-bold mb-2 dark:text-black">Graphics Design</h3>
                        <p className="text-gray-600 dark:text-black ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolor.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Services;
