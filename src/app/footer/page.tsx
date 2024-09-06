import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='w-full h-[20vw] bg-slate-100'>
<div className='w-[70%] h-[20vw] bg-white m-auto flex gap-2 justify-center items-center'>
<div className='w-[25%]  h-[150px]'>
  <h3 className='text-pink-400 text-center mt-4'>Contact us </h3>
  <p className='text-[12px] text-gray-500 hover:text-sky-600 p-1' >Email:example#gmail.com</p>
  <p className='text-[12px] text-gray-500 hover:text-sky-600 p-1'>Phone: +92 222-333-444</p>
  <p className='text-[12px] text-gray-500 hover:text-sky-600 p-1'>Address: abc # 01 street 04</p>
</div>
<div className='w-[25%]  h-[150px] '>
  <h3 className='text-pink-400 text-center mt-4' >Quick Link </h3>
<li className='list-none text-center text-gray-600 text-[16px] hover:text-sky-600'><a href="">Home</a></li>
  <li className='list-none text-center text-gray-600 text-[16px] hover:text-sky-600'><a href="">About</a></li>
 <li className='list-none text-center text-gray-600 text-[16px] hover:text-sky-600'> <a href="">Courses</a></li>
  <li className='list-none text-center text-gray-600 text-[16px] hover:text-sky-600'><a href="">Contact</a></li>
</div>

<div className='w-[25%] h-[150px]'>
  <h3 className='mt-4 text-center text-pink-400'>Follow us</h3>

<div className='flex gap-2 ml-9'>
<div className='mt-4 text-2xl text-gray-600 hover:text-sky-600'>
<FaFacebook />
</div>
<div className=' mt-4 text-2xl text-gray-600 hover:text-sky-600'>
<FaLinkedin />
</div>
<div className=' mt-4 text-2xl text-gray-600 hover:text-sky-500'>
<FaTwitterSquare />
</div>
</div>
</div>

</div >
    </div>
  )
}

export default Footer