import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className= 'w-full h-screen bg-[#001427]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#708D81]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#E09F3E]'>Alex Defrese</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#FFF3B0]'>I am a Full Stack Developer</h2>
            <p className='text-[#708D81] py-4 max-w-[700px]'>What can we develop together?</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7C131A] hover:border-[#7C131A]'>
                <Link to="work" smooth={true} duration={500}>
                View Work
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
                </button>
            </div>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7C131A] hover:border-[#7C131A]'>
                <a
                 href="https://docs.google.com/document/d/10Oz67ht8RRJ-MvmfVkUSwRstPspgEReYGXYEvyUY6Ms/edit?usp=sharing"
                 target="_blank">
                  Resume
                </a>
                <span>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
                </button>
            </div>
        </div>
        </div>
  )
}

export default Home