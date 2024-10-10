import React from 'react'
import first from "../assets/2.png"
import SkillData from '../utils/SkillData'

const AboutMe = () => {
    return (
        <div data-aos="fade-right" id="scrollToAbout" className='w-full flex justify-center '>
           
            <div className='w-full max-w-[1500px] flex flex-col md:flex-row items-center justify-center'>

                {/* Left side - Image Section */}
                <div className='w-full md:w-1/2 flex justify-center p-4'>
                    <div className='relative'>
                        <img alt='Image' src={first} className="lg:w-[420px] lg:h-[450px] md:w-[420px] md:h-[450px] w-[250px] h-auto   "  />
                        <div className='absolute top-[14%] left-[25%] lg:top-[14%] lg:left-[22%] md:top-[14%] md:left-[22%] lg:w-[220px] lg:h-[60px]  md:w-[220px] md:h-[60px]  w-[120px] h-[30px] bg-orange-500 opacity-70 z-10'></div>
                    </div>
                </div>

                {/* Right side - Skills Section */}
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-start">
                    <div className='w-full flex flex-col lg:items-start lg:justify-start md:items-start md:justify-start items-center gap-y-3'>
                        <h1 className='dark:text-white text-[40px] font-bold'>About Me</h1>
                        <p className='dark:text-white w-[85%] lg:text-base text-sm lg:text-start md:text-base md:text-start text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora, 
                            assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur. 
                            Illo dignissimos architecto iusto deserunt amet! Saepe, libero.</p>

                        {
                            SkillData.map((item, index) => (
                                <div key={index} className="w-full flex flex-col items-start">
                               
                                    <p className='dark:text-white mb-3 mt-3'>{item.tech}</p>

                                
                                    <progress
                                        className="w-[80%] h-[8px] progress-bar "
                                        value={item.value}
                                        max="100"
                                    ></progress>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
