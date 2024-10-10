import React from 'react'
import Logo from '../assets/Subtract.svg'
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { Link } from 'react-scroll';


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

                <div className='flex flex-wrap space-x-5 justify-center items-start w-full mt-5'>
                <Link to="scrollToHead" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white" aria-current="page">Home</Link>

                <Link to="scrollToAbout" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">About Me</Link>

                <Link to="scrollToService" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Services</Link>

                <Link to="scrollToProjects" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Projects</Link>

                <Link to="scrollToTestimonial" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Testimonials</Link>

                <Link to="scrollToContact" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Contact</Link>


                </div>

                <div className='flex flex-row gap-x-5 justify-center items-center text-center mt-10 mb-2 '>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base' ><FaFacebook /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] lmdtext-[30px] text-base'><FaTwitter /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base'><FaInstagram /></span>
                        <span className='text-[30px] dark:text-white sm:text-base lg:text-[30px] md:text-[30px] text-base'><FaLinkedin /></span>
                    </div>

            </div>
        </div>
    )
}

export default Footer