
import { useState } from "react";
import man from "../assets/man.png";
import man2 from  "../assets/man2.png"

export default function Carosel() {
    const [activeIndex, setActiveIndex] = useState(1);
    const testimonials = [
        {
            image: man, // Replace with your image path
            name: "John Doe",
            title: "CEO",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
        {
            image: man, // Replace with your image path
            name: "Jane Smith",
            title: "Developer",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus arcu condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
        {
            image: man2, // Replace with your image path
            name: "Safayet",
            title: "Developer",
            testimonial:
                "Lorem ipsum dolor sit amet consectetur, in enim cursus odio accumsan id leo uma velit neque mattis id tallus arcu condimentum Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices",
        },
    ];



    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full flex justify-center mt-5 ">
            <div className="w-full container flex flex-col items-center ">
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

                <div className=" mt-10  overflow-hidden">
                    <div className=" h-full relative items-center justify-center w-full">
                        {/* Left Card */}
                        <div className="h-full sm:w-3/5 w-full absolute sm:-left-[277px] md:-left-[325px] lg:-left-[427px]  xl:-left-[525px] 2xl:-left-[626px] transition-transform duration-500">
                            <div className="h-full gap-x-4 bg-gray-800 p-4 flex justify-center rounded-lg text-white">
                                <div className="col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[(activeIndex + 2) % testimonials.length].image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-8">
                                    <p className="text-lg mb-2">
                                        {
                                            testimonials[(activeIndex + 2) % testimonials.length]
                                                .testimonial
                                        }
                                    </p>
                                    <p className="text-gray-400 mb-1">
                                        {testimonials[(activeIndex + 2) % testimonials.length].name}
                                    </p>
                                    <p className="text-gray-500">
                                        {
                                            testimonials[(activeIndex + 2) % testimonials.length]
                                                .title
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Middle Card */}
                        <div className="h-full sm:w-3/5 w-full mx-auto transition-transform duration-500 ">
                            <div className="h-full  gap-x-4 bg-gray-800 p-4 flex rounded-lg text-white">
                                <div className="col-span-4 flex justify-center items-center">
                                    <img
                                        src={testimonials[activeIndex]?.image}
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-8">
                                    <p className="text-lg mb-2">
                                        {testimonials[activeIndex]?.testimonial}
                                    </p>
                                    <p className="text-gray-400 mb-1">
                                        {testimonials[activeIndex]?.name}
                                    </p>
                                    <p className="text-gray-500">
                                        {testimonials[activeIndex]?.title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="h-full sm:w-3/5 w-full absolute sm:-right-[277px] md:-right-[325px] lg:-right-[427px] xl:-right-[525px] 2xl:-right-[626px] top-0  transition-transform duration-500">
                            <div className="h-full gap-x-4 bg-gray-800 p-4 flex justify-center rounded-lg text-white">
                                <div className="col-span-4 flex justify-center items-center">
                                    <img
                                        src={
                                            testimonials[(activeIndex + 1) % testimonials.length]
                                                .image
                                        }
                                        alt="Testimonial Image"
                                        className="rounded-full w-24 h-24 mb-4"
                                    />
                                </div>
                                <div className="col-span-8">
                                    <p className="text-lg mb-2">
                                        {
                                            testimonials[(activeIndex + 1) % testimonials.length]
                                                .testimonial
                                        }
                                    </p>
                                    <p className="text-gray-400 mb-1">
                                        {testimonials[(activeIndex + 1) % testimonials.length].name}
                                    </p>
                                    <p className="text-gray-500">
                                        {
                                            testimonials[(activeIndex + 1) % testimonials.length]
                                                .title
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="z-50 flex mt-12 gap-2">
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