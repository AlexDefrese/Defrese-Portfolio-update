import React from 'react'
import FoodyTrack from '../assets/foodytrack.png';
import RunBuddy from '../assets/Run-Buddy.png';
import ComingSoon from '..//assets/coming-soon2.png';
import PlaceBook from '../assets/PlaceBook.png'

const Work = () => {
  return (
    <div  name='work' className='w-full md:h-screen text-gray-300 bg-[#001427]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
           <div className='pb-8'> 
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#7C131A]'>Work</p>
            <p className='py-6'>Check out some of my work</p>
           </div> 
    {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* grid item */}
            <div style={{backgroundImage: `url(${FoodyTrack})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    FoodyTrack: A Recipe Search App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://annoyingdroid.github.io/FoodyTrack" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AlexDefrese/FoodyTrack" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${RunBuddy})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    RunBuddy: An App for Runners
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://lernantino.github.io/run-buddy/" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AlexDefrese/run-buddy" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${PlaceBook})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    PlaceBook: Social Media for Travelers
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://taholton748.github.io/PlaceBook/" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/taholton748/PlaceBook" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${ComingSoon})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Stay Tuned!
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/AlexDefrese" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/AlexDefrese" target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Work