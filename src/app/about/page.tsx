import React from 'react'
import Image from 'next/image'
import teacher from '../../../image/teacher.png'
function About() {
  return (

    <div id='aboutsection' className=' w-[100%] bg-slate-100'>
        <h1 className=' text-center text-3xl text-sky-600 font-semibold'>About us</h1>
        <div className='flex gap-5'>
        <div className='w-6/12 h-80 mx-3'>
      <Image id='aboutimg' className='w-96 h-full px-8 '  src={teacher} alt=''/>
        </div>
        <div className='w-6/12 h-80 '>
            <h1 className='m-4 text-[20px] text-pink-400 '>Why choose us?</h1>
            <p id='about_para' className='mx-5 text-gray-500 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, unde quidem aspernatur dolores sapiente distinctio laborum adipisci culpa molestiae pariatur, at aliquam voluptatum beatae velit possimus voluptas. Eveniet, earum.</p>
            <button className='bg-sky-600 text-white w-28 mx-5 p-2 rounded-sm my-2 hover:opacity-60' >Explore more</button>
        </div>
        </div>
    </div>
  )
}

export default About