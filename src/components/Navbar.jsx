import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed z-[999] w-full px-20 py-8 flex justify-between '>
       
      <span className=' text-2xl font-bold '>keul.io</span>
      
        
      <div className='mt-1 flex gap-20 '>
        <a className='text-md font-light capitalize' href="">About</a>
        <a className='text-md font-light capitalize' href="">Experience</a>
        <a className='text-md font-light capitalize' href="">Projects</a>
        <a className='text-md font-light capitalize' href="">Services</a>
        <a className='text-md font-light capitalize ml-40' href="">Contact Us</a>
      </div>
      
    </nav>
  )
}
export default Navbar