import React from 'react'
import first from "../assets/1.png"
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";

const HeadSection = () => {
    return (
        <div data-aos="fade-left" id="scrollToHead" className='w-full flex justify-center'>
            <div className='w-full max-w-[1250px] grid grid-cols-12 sm:grid-cols-1 lg:grid-cols-12 items-center justify-center mt-[200px]'>

                {/* left side */}
                <div className='h-full w-full lg:col-span-6 sm:col-span-12   col-span-12 items-start justify-center gap-y-3 px-5'>
                    <p className='dark:text-white text-[18px] sm:text-[18px] lg:text-[24px] md:text-[24px] font-semibold'>Hi I am</p>
                    <p className='text-[32px] text-[#FD6f00] sm:text-[24px] font-bold'>Muhammad Umair</p>
                    <div className="flex flex-col relative font-extrabold dark:text-white text-[30px] xl:text-[65px] lg:text-[40px] md:text-[40px] sm:text-[24px]">
                        <span className="relative dark:text-white">UI & UX</span>
                        <span className="absolute left-0 mt-[1.5rem] ml-[calc(4.5rem)] md:ml-[calc(6rem)] sm:mt-[1.4rem] md:mt-[2rem] xl:mt-[3rem]  xl:ml-[calc(10rem)]  lg:ml-[calc(6rem)] sm:ml-[calc(3.8rem)]">Designer</span>
                    </div>
                    <h1 className='mt-[50px] dark:text-white text-xs sm:text-sm md:text-base lg:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem laboriosam illum aliquam odit, voluptate odio quasi incidunt asperiores officia architecto at.
                    </h1>
                    <button className='bg-[#FD6F00] px-[30px] py-[10px] rounded-md text-white font-bold text-[10px] lg:text-[17px] md:text-[17px] sm:text-[16px] mt-3'>
                        Hire Me
                    </button>
                </div>

                {/* right side */}
                <div className="w-full lg:col-span-6 sm:col-span-12 col-span-12 flex flex-col justify-center lg:justify-end items-center lg:mt-0 sm:mt-10">

                    <div className='relative'>
                        <img alt='Image' src={first} className="lg:w-[350px] sm:w-[200px] md:w-[350px] w-[200px] h-auto" />
                        <div className='absolute top-[12%] left-[17%] sm:w-[120px] md:w-[220px] lg:w-[220px] w-[120px] lg:h-[60px] md:h-[60px] h-[30px] sm:h-[30px] bg-orange-500 opacity-70 z-10'></div>
                    </div>

                    {/* Social icons, now centered under the image */}
                    <div className='flex flex-row gap-x-5 justify-center items-center text-center mt-10 mb-2 '>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base' ><FaFacebook /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] lmdtext-[30px] text-base'><FaTwitter /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base'><FaInstagram /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base'><FaLinkedin /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadSection
