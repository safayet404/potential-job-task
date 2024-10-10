import React from 'react'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
const Projects = () => {
    return (
        <div data-aos="fade-right" id="scrollToProjects" className='w-full flex justify-center mt-5'>
            <div className='w-full max-w-[1500px] flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center w-full text-center mb-8'>
                    <span className='dark:text-white text-[30px] lg:text-[40px] md:text-[40px] font-bold'>
                        My Projects
                    </span>

                    <span className='dark:text-white w-[70%] text-sm lg:text-base md:text-base '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora,
                        assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur.
                    </span>

                </div>

                <div className='flex flex-wrap justify-center items-start w-full'>
                    <span className='pr-7 bg-[#F8F8F8] pl-7 pb-1 pt-1 m-2 text-sm font-smibold border-1 border-[#545454] rounded-md'>All</span>
                    <span className='pr-7 bg-[#F8F8F8] pl-7 pb-1 pt-1 m-2 text-sm font-smibold  border-1 border-[#545454] rounded-md'> UI/UX</span>
                    <span className='pr-7 bg-[#FD6F00] text-white pl-7 pb-1 pt-1 m-2 text-sm font-smibold  border-1 border-[#545454] rounded-md'>Web Design</span>
                    <span className='pr-7 bg-[#F8F8F8] pl-7 pb-1 pt-1 m-2 text-sm font-smibold border-1 border-[#545454] rounded-md'>App Design</span>
                    <span className='pr-7 bg-[#F8F8F8] pl-7 pb-1 pt-1 m-2 text-sm font-smibold border-1 border-[#545454] rounded-md'>Graphic Design</span>
                </div>

                <div className='flex flex-wrap justify-center items-center w-full'>


                    <div className=' mt-10 m-4'>
                        <img className='rounded-md w-[440px] h-[489px] sm:items-center  ' src={p3} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px]  mt-3 mb-3  '>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold '>AirCalling Landing Page Design </span>
                        </div>
                    </div>

                    <div className=' mt-10 m-4'>
                        <img className='rounded-md w-[440px] h-[489px]  ' src={p2} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px]  mt-3 mb-3  '>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold '>Business Landing Page Design  </span>
                        </div>
                    </div>
                    <div className=' mt-10 m-4'>
                        <img className='rounded-md w-[440px] h-[489px]  ' src={p1} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px]  mt-3 mb-3  '>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold '>Ecom Web Page Design </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects