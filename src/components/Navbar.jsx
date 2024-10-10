import React, { useState, useEffect } from 'react';
import Logo from '../assets/Subtract.svg';
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarBg, setNavbarBg] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg(true); 
            } else {
                setNavbarBg(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`fixed bg-[#F8F8F8] w-full z-20 top-0 start-0 transition-all duration-300 ${navbarBg ? 'dark:bg-[#1e1e1e] bg-[#F8F8F8] shadow-md' : 'bg-transparent'}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="scrollToHead" smooth={true} duration={500} href="/" className="flex items-center">
                        <img className='w-[20px] h-[20px] lg:w-[67px] lg:h-[67px] md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px]' src={Logo} alt="logo" />
                        <span className='font-bold lg:text-[25px] md:text-[15px] sm:text-[14px] text-[26px] px-5 dark:text-white'>
                            M<span className='font-normal'>umair</span>
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-3 lg:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="scrollToHead" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="scrollToAbout" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">About Me</Link>
                            </li>
                            <li>
                                <Link to="scrollToService" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Services</Link>
                            </li>
                            <li>
                                <Link to="scrollToProjects" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Projects</Link>
                            </li>
                            <li>
                                <Link to="scrollToTestimonial" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Testimonials</Link>
                            </li>
                            <li>
                                <Link to="scrollToContact" smooth={true} duration={500} className="block py-2 px-3 hover:cursor-pointer rounded md:p-0 dark:text-white">Contact</Link>
                            </li>
                            <li>
                                <a
                                    href=" "
                                    download
                                    className="bg-[#FD6F00] text-white px-5 py-2 rounded-md text-base font-medium"
                                >
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
