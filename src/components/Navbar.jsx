import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Logo from '../assets/AD.png'

const Navbar = () => {
    const [ nav, setNav] = useState(false)
    const handleClick =() => setNav(!nav)
  
    return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001427] text-[#708D81]">
      <div className=' hover:shadow-lg hover:shadow-[#B3C9D0]'>
        <a href="">
        <img src={Logo} alt='Logo' style= {{width: '75px'}} />
        </a>
      </div>
      {/* menu */}
        <ul className='hidden md:flex'>
          <li className= 'hover:text-[#FFF3B0] duration-500'>
          <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li className= 'hover:text-[#FFF3B0] duration-500'>
          <Link to="about" smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li className= 'hover:text-[#FFF3B0] duration-500'>
          <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
          </li>
          <li className= 'hover:text-[#FFF3B0] duration-500'>
          <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
          </li>
          <li className= 'hover:text-[#FFF3B0] duration-500'>
          <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#001427] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
      </ul>
      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.linkedin.com/in/alexdefrese/" target= "_blank">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#272B33]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://github.com/AlexDefrese" target="_blank">
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
           {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#336666]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="/">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li> */}
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://docs.google.com/document/d/10Oz67ht8RRJ-MvmfVkUSwRstPspgEReYGXYEvyUY6Ms/edit?usp=sharing"
                 target="_blank">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar