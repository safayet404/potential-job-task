import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";

const Projects = () => {
    const containerRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('web-design');

    useEffect(() => {
        // Initialize MixItUp
        if (containerRef.current) {
            mixitup(containerRef.current, {
                selectors: {
                    target: '.mix'
                },
                load: {
                    filter: '.web-design'
                },
                animation: {
                    duration: 300
                }
            });
        }
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

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
                    <span
                        onClick={() => handleFilterClick('all')}
                        className={`pr-7 pl-7 pb-1 pt-1 m-2 text-sm font-semibold border-1 border-[#545454] rounded-md cursor-pointer ${activeFilter === 'all' ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8]'}`}
                        data-filter="all"
                    >
                        All
                    </span>
                    <span
                        onClick={() => handleFilterClick('web-design')}
                        className={`pr-7 pl-7 pb-1 pt-1 m-2 text-sm font-semibold border-1 border-[#545454] rounded-md cursor-pointer ${activeFilter === 'web-design' ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8]'}`}
                        data-filter=".web-design"
                    >
                        Web Design
                    </span>
                    <span
                        onClick={() => handleFilterClick('ui-ux')}
                        className={`pr-7 pl-7 pb-1 pt-1 m-2 text-sm font-semibold border-1 border-[#545454] rounded-md cursor-pointer ${activeFilter === 'ui-ux' ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8]'}`}
                        data-filter=".ui-ux"
                    >
                        UI/UX
                    </span>
                    <span
                        onClick={() => handleFilterClick('app-design')}
                        className={`pr-7 pl-7 pb-1 pt-1 m-2 text-sm font-semibold border-1 border-[#545454] rounded-md cursor-pointer ${activeFilter === 'app-design' ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8]'}`}
                        data-filter=".app-design"
                    >
                        App Design
                    </span>
                    <span
                        onClick={() => handleFilterClick('graphics-design')}
                        className={`pr-7 pl-7 pb-1 pt-1 m-2 text-sm font-semibold border-1 border-[#545454] rounded-md cursor-pointer ${activeFilter === 'graphics-design' ? 'bg-[#FD6F00] text-white' : 'bg-[#F8F8F8]'}`}
                        data-filter=".graphics-design"
                    >
                        Graphics Design
                    </span>
                </div>

                <div ref={containerRef} className='flex flex-wrap justify-center items-center w-full'>
                    <div className='mix web-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p3} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>AirCalling Landing Page Design</span>
                        </div>
                    </div>

                    <div className='mix app-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p4} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>App Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] mdtext-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>
                                Education app
                            </span>
                        </div>
                    </div>

                    <div className='mix web-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p2} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>Business Landing Page Design</span>
                        </div>
                    </div>

                    <div className='mix app-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p6} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>App Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>
                                Music Player RhythmoTune
                            </span>
                        </div>
                    </div>


                    <div className='mix ui-ux mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p2} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>UI UX</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>Business Landing Page Design</span>
                        </div>
                    </div>

                    <div className='mix web-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p1} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>Web Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>Ecom Web Page Design</span>
                        </div>
                    </div>

                    <div className='mix graphics-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p7} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>Graphics Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>
                                Website for Energy Company
                            </span>
                        </div>
                    </div>

                    <div className='mix app-design mt-10 m-4'>
                        <img className='rounded-md w-[400px] h-[450] 2xl:w-[440px] 2xl:h-[489px] xl:w-[390px] xl:h-[370px] md:w-[300px] md:h-[340px] sm:w-[400px] sm:h-[450px] lg:w-[280px] lg:h-[340px] sm:items-center' src={p5} alt="project" />
                        <div className='flex flex-col w-full'>
                            <span className='text-[#FD6F00] text-[16px] mt-3 mb-3'>App Design</span>
                            <span className='dark:text-white text-[22px] font-bold sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[22px] 2xl:text-[22px]'>
                                Language learning app
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Projects;
