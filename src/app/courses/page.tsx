import React from 'react'
import Image from 'next/image'
import html from '../../../image/html.png'
import css from '../../../image/css.png'
import js from '../../../image/js.png'
import python from '../../../image/python.png'
import java from '../../../image/java.png'
import node from '../../../image/node.png'

function Courses() {
  return (
    <div className='w-full h-[40rem] bg-slate-100 '>
      <h1 className='text-center p-5 text-3xl text-sky-600 font-semibold'>Best Courses</h1>
<div className='flex justify-center items-center gap-3 flex-wrap'>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={html} alt=''  />
    <div>
      <h1 className='text-center  text-pink-400'>HTML</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-60 ml-[7vw]'>Get started</button>
    </div>
</div>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={css} alt=''  />
    <div>
      <h1 className='text-center  text-pink-400'>CSS</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-60 ml-[7vw]'>Get started</button>
    </div>
    
</div>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={js} alt=''  />
    <div>
      <h1 className='text-center  text-pink-400'>javascript</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-90 ml-[7vw]'>Get started</button>
    </div>
</div>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={python} alt=''  />
    <div>
      <h1 className='text-center  text-pink-400'>Python</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-60 ml-[7vw]'>Get started</button>
    </div>
</div>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={node} alt=''  />
    <div>
      <h1 className='text-center  text-pink-400'>Node</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-60 ml-[7vw]'>Get started</button>
    </div>
</div>
<div className='w-[24%] h-60 bg-white rounded-1xl flex flex-col justify-center items-center rounded-xl'>
    <Image className='size-20 p-2' src={java} alt=''  />
    <div>
      <h1 className='text-center text-pink-400'>JAVA</h1>
      <p className='text-center text-[12px] p-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, est, dolor quo iusto consequuntur quidem tempora molestias  </p>
      <button className='bg-sky-600 text-white w-24 mx-5 p-2 rounded-sm mb-4 hover:opacity-60 ml-[7vw]'>Get started</button>
    </div>
</div>
</div>
{/* 
<button className='bg-sky-600 text-white w-28 mt-4 ml-96 mx-5 p-2 rounded-sm mb-4 hover:opacity-90'>Explore More</button> */}
    </div>
  )
}

export default Courses