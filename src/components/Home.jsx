import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#001427]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#708D81]'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#E09F3E]'>Alex Defrese</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#FFF3B0]'>I am a Full Stack Developer</h2>
            <p className='text-[#708D81] py-4 max-w-[700px]'>*****Placeholder text for blurb******</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9E2A2B] hover:border-[#9E2A2B]'>
                <Link to="work" smooth={true} duration={500}>
                View Work
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
                </button>
                
            </div>
        </div>
        </div>
  )
}

export default Home