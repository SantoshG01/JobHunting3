import React from 'react'
import Image from 'next/image'

import { Poppins } from 'next/font/google'

const Home = () => {
  return (
    <div className='pt-16   bg-[#E2CCF2]  w-screen h-screen  text-wrap '>
      <div className='pr-4 pl-4 lg:pl-16 lg:pr-16  md:pr-5 md:pl-5 space-y-10 '>
        <div  className='space-y-2 '>
          <h1 className=' sm:text-4xl md:text-4xl lg:text-5xl  font-black font-poppins    '>Find your <span className="text-[#545BE8] ">new job</span> today .</h1>
          <p className='font-poppins '>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
        </div>

        <div className='mx-auto '>
          <div className=' md:flex   md:space-x-2  '>
            <input type="text" className=' w-[92%]    border-black items-center justify-around  p-2 lg:p-3 md:p-3 shadow-lg bg-slate-100 ' placeholder='What position are you looking for? ' />
            <input type="text" className=' w-[92%]   border-black p-2 shadow-lg bg-slate-100 mx-auto ' placeholder='Location  ' />
            <button className='p-2  bg-[#545BE8] text-white min-w-fit shadow-lg'>Apply for jobs </button>
          </div>
        </div>
        <Image src="/g.png"
        alt=""
        width={1000}
        height={1000}  className='hidden md:flex shrink-0 mx-auto justify-around items-center '/>
        
      </div>
      
    </div>
  )
}

export default Home
