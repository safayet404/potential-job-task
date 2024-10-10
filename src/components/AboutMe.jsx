import React from 'react'
import first from "../assets/2.png"
import SkillData from '../utils/SkillData'

const AboutMe = () => {
    return (
        <div className='w-full flex justify-center '>
            {/* Main Container with a maximum width of 1200px */}
            <div className='w-full max-w-[1500px] flex flex-col md:flex-row items-center justify-center'>

                {/* Left side - Image Section */}
                <div className='w-full md:w-1/2 flex justify-center p-4'>
                    <div className='relative'>
                        <img alt='Image' src={first} className="w-[420px] h-[450px]" />
                        <div className='absolute top-[14%] left-[22%] w-[220px] h-[60px] bg-orange-500 opacity-70 z-10'></div>
                    </div>
                </div>

                {/* Right side - Skills Section */}
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-start">
                    <div className='w-full flex flex-col items-start justify-center gap-y-3'>
                        <h1 className='dark:text-white text-[40px] font-bold'>About Me</h1>
                        <p className='dark:text-white w-[85%] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora, 
                            assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur. 
                            Illo dignissimos architecto iusto deserunt amet! Saepe, libero.</p>

                        {
                            SkillData.map((item, index) => (
                                <div key={index} className="w-full flex flex-col items-start">
                                    {/* Tech name */}
                                    <p className='dark:text-white mb-3 mt-3'>{item.tech}</p>

                                    {/* Progress bar */}
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
