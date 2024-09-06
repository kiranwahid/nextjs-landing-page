import React from 'react'
import Image from 'next/image'
import contact from '../../../image/contact.png'

function Contact() {
  return (
    <div className='w-full min-h-screen bg-slate-100'>
      <h1 className='text-center text-3xl text-sky-600 font-semibold p-3'>Contact Us</h1>
        <div className='w-[70vw] bg-white h-80 m-auto flex gap-1'>
<div className='w-[40vw] h-full'>
  <h1 className='text-center p-3 text-pink-400 font-semibold'>Get in touch!</h1>
<form className='mt-4 p-3 flex flex-col gap-8 ml-1' action="">

<div>
<input id='contactinp1' className='w-[80%]  text-[14px]' type="text" placeholder='Enter Name' />
</div>
<div>
<input id='contactinp2' className='w-[80%] text-[14px]' type="email" placeholder='Enter Email' />
</div>
{/* <div>
<input id='contactinp' className='w-[80%] text-[14px]' type="password" placeholder='Enter Password' />
</div> */}
<div>
<textarea id='contacttexterea' className='columns-3 rows-[30] w-[80%] h-10 text-[14px] pl-1' name=""  placeholder='feedback...'>
  
</textarea>

</div>

<div>
  <button className='bg-sky-600 text-white w-20 mt-[-30px] p-2 rounded-sm  hover:opacity-60'>Submit</button>
</div>
</form>
</div>

<div className='w-[35vw] h-full'>
<Image src={contact} alt=''/>
</div>


        </div>
    </div>
  )
}

export default Contact