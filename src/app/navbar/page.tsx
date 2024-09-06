import React from 'react'
import Image from 'next/image'
import logo from "../../../image/logo.webp"
import Link from 'next/link'
function Navbar() {
  return (
    <div id='main' className='flex justify-between items-center px-10 text-sky-600 font-semibold max-w-full h-[55px]'>
        <div className='flex justify-center items-center'>
       <Image className = "size-12" src = {logo} alt = "" />
       <span className='text-pink-400'>Edu</span>
        </div>
        <ul className='flex gap-7 cursor-pointer'>
          <Link className='text-pink-400 hover:text-sky-400' href={'#'}>Home</Link>
          <Link  className='text-pink-400 hover:text-sky-400' href={'about'}>About</Link>
          <Link  className='text-pink-400 hover:text-sky-400' href={'courses'}>Courses</Link>
          <Link  className='text-pink-400 hover:text-sky-400' href={'contact'}>Contact</Link>
          

{/* 
            <li ></li>
            <li >About</li>
            <li >Courser</li>
            <li >Contact</li> */}
            
        </ul>
    </div>
  )
}

export default Navbar