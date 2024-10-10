import React from 'react'
import Logo from '../assets/Subtract.svg'
import { FaTwitter,FaInstagram,FaLinkedin,FaFacebook  } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='w-full flex justify-center mt-10'>
            <div className='w-full max-w-[1500px] flex flex-col  items-center justify-center'>

                <div className="flex-shrink-0 mt-[100px]">
                    <a className='flex' href="/">
                        <img className='w-[55px] h-[55px]' src={Logo} alt="logo" />
                        <span className='font-bold  text-[35px]  px-6 dark:text-white'>M<span className='font-normal'>umair</span></span>
                    </a>
                </div>

                <div className="hidden sm:flex sm:space-x-4 mt-[50px]">
                    <a
                        href="#scrollToHome"
                        className="dark:text-[#FFF8F8] text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        Home
                    </a>
                    <a
                        href="#scrollToAbout"
                        className="dark:text-[#FFF8F8] text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        About Me
                    </a>
                    <a
                        href="#scrollToProject"
                        className="dark:text-[#FFF8F8] text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        Services
                    </a>
                    <a
                        href="#scrollToEducation"
                        className="dark:text-[#FFF8F8] text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        Projects
                    </a>
                    <a
                        href="#scrollToContact"
                        className="dark:text-[#FFF8F8] text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#scrollToContact"
                        className="dark:text-[#FFF8F8]  text-black font-poppins text-[14px] px-2 py-5 rounded-md"
                    >
                        Contacts
                    </a>
                  
                </div>

                <div className='flex flex-row gap-x-5 mt-10 mb-2'>
                    <span className='text-[30px] dark:text-white '><FaFacebook  /></span>
                    <span className='text-[30px] dark:text-white '><FaTwitter /></span>
                    <span className='text-[30px] dark:text-white '><FaInstagram /></span>
                    <span className='text-[30px] dark:text-white '><FaLinkedin /></span>
                </div>

            </div>
        </div>
    )
}

export default Footer