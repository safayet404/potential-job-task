import { useState } from "react";
import man from '../assets/man.png'
import man2 from '../assets/man2.png'


export default function Carosel() {
    const [activeIndex, setActiveIndex] = useState(1);
    const testimonials = [
        {
            image: man, // Replace with your image path
            name: 'John Doe',
            title: 'CEO',
            testimonial: 'Lorem ipsum dolor sit amet cocondimentum Augue convallis dignissi',
        },
        {
            image: man, // Replace with your image path
            name: 'Jane Smith',
            title: 'Developer',
            testimonial: 'Lorem ipsum dolor sit amet cocondimentum Augue convallis dignissi',
        },
        {
            image: man2, // Replace with your image path
            name: 'Bille Elish',
            title: 'Developer',
            testimonial: 'Lorem ipsum dolor sit amet cocondimentum Augue convallis dignissi',
        },
    ];
    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full flex justify-center mt-5">
            <div className="w-full max-w-[1500px] flex flex-col items-center ">
                <div className="flex flex-col justify-center items-center w-full">
                    <span className="dark:text-white text-[40px] font-bold">
                        Testimonials
                    </span>
                    <span className="dark:text-white w-[70%] text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
                        sapiente tempora, assumenda quod, cum repellat, explicabo quisquam
                        ex corrupti expedita odio pariatur.
                    </span>
                </div>

                <div className=" flex flex-row justify-center mt-10 w-full overflow-hidden">
                    <div className="grid grid-cols-12 items-center justify-center w-full ">
                        {/* Left Card */}
                        <div className="col-span-4 h-full  transition-transform  duration-500" style={{ transform: `translateX(-40%)`, }}>
                            <div className="bg-white p-4 grid grid-cols-12  justify-center rounded-lg text-white">
                            <div className="absolute inset-0 bg-[#4A4A4A] opacity-50 rounded-lg z-10"></div>
                                <div className="relative col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[(activeIndex + 2) % testimonials.length].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />

                                </div>
                                <div className="col-span-8">

                                     <p className="text-lg text-black mb-2">
                                        {testimonials[(activeIndex+2 ) % testimonials.length].testimonial}  <span className="text-[#FD6F00]">“</span>
                                    </p>
                                    <p className="text-black mb-1">
                                    {testimonials[(activeIndex ) % testimonials.length].name}
                                    </p>
                                    <p className="text-gray-500">{testimonials[(activeIndex+2) % testimonials.length].title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Middle Card */}
                        <div className="col-span-4 h-full transition-transform duration-500 ">
                            <div className="dark:bg-white bg-[#F8F8F8] dark:text-gray-500 p-4 grid grid-cols-12 rounded-lg">
                                
                                <div className="col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[activeIndex].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-8">
                                    <p className="text-lg font-bold mb-2">
                                    <span className="text-[#FD6F00]">“</span>{testimonials[activeIndex].testimonial}  <span className="text-[#FD6F00]">“</span>
                                    </p>
                                    <p className="text-black font-bold mb-1">
                                        {testimonials[activeIndex].name}
                                    </p>
                                    <p className="text-black">{testimonials[activeIndex].title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div
                            className="col-span-4 h-full  transition-transform duration-500"
                            style={{
                                transform: `translateX(50%)`,
                            }}
                        >
                            <div className="bg-white p-4 grid grid-cols-12  justify-center rounded-lg text-white">
                            <div className="absolute inset-0 bg-[#4A4A4A] opacity-50 rounded-lg z-10"></div>
                                <div className=" relative col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[(activeIndex + 1) % testimonials.length].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />

                                </div>
                                <div className="col-span-8">

                                    <p className="text-lg text-black mb-2">
                                        {testimonials[(activeIndex + 1) % testimonials.length].testimonial}
                                    </p>
                                    <p className="text-gray-400 mb-1">
                                        {testimonials[(activeIndex + 1) % testimonials.length].name}
                                    </p>
                                    <p className="text-gray-500">{testimonials[(activeIndex +2) % testimonials.length].title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navigation Buttons */}

                {/* Dots Indicator */}
                <div className=" z-50 flex mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`block h-2 cursor-pointer rounded-full transition-all ${activeIndex === index ? "w-8 bg-blue-600" : "w-4 bg-red-500"
                                }`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}