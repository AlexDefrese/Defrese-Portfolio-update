import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#001427] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#7C131A]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hey, I'm Alex.</p>
            <p>It's nice to meet you.</p>
          </div>
          <div>
            <p >Who am I? I'm a Full Stack Web Developer with a background in Film and Media Studies able to provide a unique perspective to projects. Effective problem-solver, demonstrating creativity and resourcefulness to develop user-friendly applications. Known amongst staff to be calm and level-headed with a high attention to detail no matter the scope of the project.</p>
            <br></br>
            <p className='text-xl'>Have a look around and enjoy yourself!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About