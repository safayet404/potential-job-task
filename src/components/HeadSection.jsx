import React from 'react'
import first from "../assets/1.png"

const HeadSection = () => {
    return (


        <div className='w-full flex justify-center mt-[200px]'>
            {/* Main Container with a maximum width of 1200px */}
            <div className='w-full max-w-[1500px] flex flex-col md:flex-row items-center justify-center'>

                {/* left side */}
                <div className='h-full w-full lg:w-2/3 flex flex-col items-start justify-center'>
                    <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-start  justify-center gap-y-3 2xl:-mt-10'>

                        <p className='dark:text-white text-[24px] font-semibold'>Hi I am</p>
                        <p className='text-[32px] text-[#FD6f00] font-bold'>Muhammad Umair</p>
                        <div className="flex flex-col relative font-extrabold dark:text-white text-[100px]">
                            <span className="relative dark:text-white">UI & UX</span>
                            <span className="absolute left-0 mt-[5rem] ml-[calc(15rem)]">Designer</span>
                        </div>
                        <h1 className='mt-[70px] dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rem laboriosam illum aliquam odit, voluptate odio quasi incidunt asperiores officia architecto at. Recusandae quidem laudantium commodi distinctio unde, natus cum.</h1>
                        <button className='bg-[#FD6F00] pr-[50px] pl-[50px] pb-[10px] pt-[10px] rounded-md text-white font-bold text-[20px] mt-3'>Hire Me</button>

                    </div>
                </div>

                {/* right side */}

                <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-start">
                    <div className='relative items-center'>
                        <img alt='Image' src={first} className="w-[420px] h-[525px]" />
                        <div className='absolute top-[14%] left-[22%] w-[220px] h-[60px]  bg-orange-500 opacity-70 z-10'></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeadSection