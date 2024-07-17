import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const footer = () => {
    return (
        <>
            <div className='bg-blue-950 flex flex-col lg:flex-row lg:gap-12  p-10 md:p-16  lg:w-[175vh]  h-[100vh] lg:h-[100vh]'>
                <div className='flex flex-col gap-5  md:relative left-5 lg:w-[700px] '>
                    <h1 className='text-3xl text-cyan-400 font-bold md:text-5xl lg:text-3xl lg:font-semibold'>LOGO</h1>
                    <p className='text-white text-sm lg:text-sm md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex veniam totam nemo alias dolorem illo ab quos voluptatum cumque aliquid ipsam</p>
                    <div className='flex  text-white gap-5 md:gap-7 pt-3 md:mt-5 lg:mt-3 lg:pt-2'>
                        <span className='text-2xl md:text-4xl lg:text-3xl'>
                            <FaFacebookF />
                        </span>
                        <span className='text-2xl md:text-4xl lg:text-3xl'>
                            <FaTwitter />
                        </span>
                        <span className='text-2xl md:text-4xl lg:text-3xl'>
                            <FaLinkedinIn />
                        </span>
                        <span className='text-2xl md:text-4xl lg:text-3xl'>
                            <FaInstagram />
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-6 md:gap-20 lg:flex-row   mt-16 md:mt-20  lg:relative bottom-20'>
                    <div className='flex flex-row   text-slate-100 justify-around   lg:gap-19 lg:relative left-20   '>
                        <div className='flex flex-col gap-1 relative right-11 md:gap-3  lg:w-[84px]'>
                            <h1 className='font-bold md:text-3xl pb-4 lg:text-xl md:relative right-8'>Home</h1>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] md:relative right-8'>Product</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] md:relative right-8'>Course</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] md:relative right-8'>About Us</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] md:relative right-8'>Log In</h3>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-3  '>
                            <h1 className='font-bold md:text-3xl pb-4 relative right-26  lg:text-xl md:relative right-8'>Course</h1>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-26  md:relative right-8'>HTML & CSS</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-26  md:relative right-8'>Javascript</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px]  relative right-26 md:relative right-8'>Photography</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-26  md:relative right-8'>Graphics Design</h3>
                        </div>
                    </div>
                    <div className='flex mt-14  text-slate-100 justify-around  lg:relative bottom-14  lg:gap-4 md:relative right-7'>
                        <div className='flex flex-col gap-1 md:gap-3  lg:relative left-16' >
                            <h1 className='font-bold md:text-3xl pb-4 lg:text-xl  relative right-[34px]'>Article</h1>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-[34px]'>New</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-[34px]'>Old</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-[34px]'>Trend</h3>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] relative right-[34px]'>Popular</h3>
                        </div>
                        <div className='flex flex-col gap-1 md:gap-3  lg:relative left-6'  >
                            <div className='md:relative left-8'>
                            <h1 className='font-bold md:text-3xl pb-4 lg:text-xl relative left-1 '>Contact Us</h1>
                            <h3 className='text-sm md:text-[1.3rem] lg:text-[16px] pt-3 relative left-1'>jobhunting@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer
