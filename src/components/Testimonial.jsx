
import { useState } from "react";
import man from "../assets/man.png";
import man2 from "../assets/man2.png"
import man3 from "../assets/man3.png"

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(1);
    const testimonials = [
        {
            image: man,
            name: "John Doe",
            title: "CEO",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
        {
            image: man3,
            name: "Jane Smith",
            title: "Developer",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus arcu condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
        {
            image: man2,
            name: "Billi Elisha",
            title: "Developer",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus arcu condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
    ];



    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div data-aos="fade-right" id="scrollToTestimonial" className="w-full flex justify-center mt-5 ">
            <div className="w-full container flex flex-col items-center ">
                <div className="flex flex-col justify-center items-center w-full">
                    <span className='dark:text-white text-[30px] lg:text-[40px] md:text-[40px] font-bold'>Testimonial</span>
                    <span className='dark:text-white w-[70%] text-sm lg:text-base md:text-base '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt sapiente tempora,
                        assumenda quod, cum repellat, explicabo quisquam ex corrupti expedita odio pariatur.
                    </span>
                </div>

                <div className=" mt-10  overflow-hidden">
                    <div className=" h-full relative items-center justify-center w-full">

                        <div className="h-full sm:w-3/5 w-full absolute sm:-left-[277px] md:-left-[325px] lg:-left-[427px] xl:-left-[525px] 2xl:-left-[626px] transition-transform duration-500 sm:block hidden">
                            <div className="relative h-full gap-x-4 dark:bg-white p-4 grid grid-cols-12 justify-center rounded-lg text-white">

                                <div className="absolute inset-0 dark:bg-[#868686] bg-[#FEFEFE] opacity-70 rounded-lg"></div>

                                <div className="col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[(activeIndex + 2) % testimonials.length].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-8 relative z-10">
                                    <p className="text-gray-600 text-[12px] lg:text-sm md:text-base sm:text-[15px] mb-2">
                                        {testimonials[(activeIndex + 2) % testimonials.length].testimonial}
                                        <span className="text-[#FD6F00]">“</span>
                                    </p>
                                    <p className="dark:text-gray-600 font-bold mb-1">
                                        {testimonials[(activeIndex + 2) % testimonials.length].name}
                                    </p>
                                    <p className="dark:text-gray-600 font-bold">
                                        {testimonials[(activeIndex + 2) % testimonials.length].title}
                                    </p>
                                </div>
                            </div>
                        </div>



                     
                        <div className="h-full sm:w-3/5 w-full mx-auto transition-transform duration-500 ">
                            <div className="h-full grid grid-cols-12  gap-x-4 dark:bg-white bg-[#F8F8F8] p-4  rounded-lg text-white">
                                <div className="col-span-3 flex justify-center items-center">
                                    <img
                                        src={testimonials[activeIndex]?.image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-9">
                                    <p className="text-gray-600 text-[12px] lg:text-sm md:text-base sm:text-[15px] mb-2">
                                        <span className="text-[#FD6F00]">“</span> {testimonials[activeIndex]?.testimonial}<span className="text-[#FD6F00]">“</span>
                                    </p>
                                    <p className="text-gray-600 font-bold mb-1">
                                        {testimonials[activeIndex]?.name}
                                    </p>
                                    <p className="text-gray-600 font-bold">
                                        {testimonials[activeIndex]?.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                    
                        <div className="h-full sm:w-3/5 w-full absolute sm:-right-[277px] md:-right-[325px] lg:-right-[427px] xl:-right-[525px] 2xl:-right-[626px] top-0 transition-transform duration-500 sm:block hidden">
                            <div className="relative h-full gap-x-4 dark:bg-white p-4 grid grid-cols-12 justify-center rounded-lg text-white">
                             
                                <div className="absolute inset-0 bg-[#FEFEFE] opacity-70 rounded-lg"></div>

                                <div className="col-span-2 flex justify-center items-center">
                                    <img
                                        src={testimonials[(activeIndex + 1) % testimonials.length].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-10 relative z-10"> 
                                    <p className="text-gray-600 text-[12px] lg:text-sm md:text-base sm:text-[15px] mb-2">
                                        <span className="text-[#FD6F00]">“</span> {
                                            testimonials[(activeIndex + 1) % testimonials.length].testimonial
                                        }
                                    </p>
                                    <p className="dark:text-gray-600 font-bold mb-1">
                                        {testimonials[(activeIndex + 1) % testimonials.length].name}
                                    </p>
                                    <p className="dark:text-gray-600 font-bold">
                                        {testimonials[(activeIndex + 1) % testimonials.length].title}
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

             
                <div className="z-50 flex mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`block h-2 cursor-pointer rounded-full transition-all ${activeIndex === index ? "w-10 bg-[#FD6F00] " : "w-10 dark:bg-white bg-[#D9D9D9]"
                                }`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}