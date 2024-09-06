import React from 'react'
import Image from 'next/image'
import edu from '../../../image/edu.png'
function Herosection() {
  return (
    <div id='main_container' className='flex p-7 gap-10  bg-slate-100'>
        <div id='content' className='flex flex-col'>
            <h1 className='text-3xl text-sky-600 font-semibold serif my-10 mx-5 '>Smart Study</h1>
            <p id='para' className='text-gray-400  mx-5'>Lorem ipsum dolor sit amet consectetur . Ipsum soluta dolore natus, minus aspernatur quam distinctio fugit quos aut delectus. Soluta, sunt molestias eum laboriosam incidunt dolorum eius dolor minima.</p>
            <button className='bg-sky-600 text-white w-28 mx-5 p-2 rounded-sm my-4 hover:opacity-60'>Learn More</button>
        </div>
        <div id='img'>
<Image className='size-3/4' src={edu} alt=''/>
        </div>

    </div>
  )
}

export default Herosection