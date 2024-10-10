import React from 'react'
import Logo from '../assets/Subtract.svg'
const Navbar = () => {
    return (


        <div className='w-full flex justify-center'>
            {/* Main Container with a maximum width of 1200px */}
            <div className='w-full max-w-[1500px] flex flex-col md:flex-row items-center justify-center'>
            <nav className=" w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between  items-center h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0 mt-[100px]">
                                <a className='flex' href="/">
                                    <img className='w-[67px] h-[67px]' src={Logo} alt="logo" />
                                    <span className='font-bold  text-[48px]  px-6 dark:text-white'>M<span className='font-normal'>umair</span></span>
                                </a>
                            </div>
                            {/* Mobile menu button */}
                            <div className="sm:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {/* Links for desktop menu */}
                            <div className="hidden sm:flex sm:space-x-4 mt-[100px]">
                                <a
                                    href="#scrollToHome"
                                    className="dark:text-[#FFF8F8] text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    Home
                                </a>
                                <a
                                    href="#scrollToAbout"
                                    className="dark:text-[#FFF8F8] text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    About Me
                                </a>
                                <a
                                    href="#scrollToProject"
                                    className="dark:text-[#FFF8F8] text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    Services
                                </a>
                                <a
                                    href="#scrollToEducation"
                                    className="dark:text-[#FFF8F8] text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#scrollToContact"
                                    className="dark:text-[#FFF8F8] text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    Testimonials
                                </a>
                                <a
                                    href="#scrollToContact"
                                    className="dark:text-[#FFF8F8]  text-black font-poppins text-[18px] px-5 py-5 rounded-md"
                                >
                                    Contacts
                                </a>
                                <button
                                    href=" "
                                    download
                                    className=" bg-[#FD6F00] mt-2 font-bold text-sm text-white pt-[0px] pr-[40px] pb-[0px] pl-[40px]  rounded-md "
                                >
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu (shown only on small screens) */}
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#scrollToHome"
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#scrollToAbout"
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#scrollToProject"
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Projects
                            </a>
                            <a
                                href="#scrollToEducation"
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Education-Skill
                            </a>
                            <a
                                href="#scrollToContact"
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </a>
                            <a
                                href=" "
                                download
                                className="block bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>


            </div>
        </div>
    )
}

export default Navbar