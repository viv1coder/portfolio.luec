import React from 'react'
import Javascriptlogo from "../imgs/Javascript_logo.webp"
import Reactlogo from "../imgs/React.js_logo.webp"
import Tailwindlogo from "../imgs/tailwind_logo.webp"


const Skills = () => {
  return (
    <div className='w-full h-screen p-14 bg-purple-400 text-black rounded-tl-3xl rounded-tr-3xl'>
       <div className='border-b-[1px] pb-8 border-purple-300'>
          <h1 className='text-6xl  font-["Century_Gothic"] font-semibold'>Skills</h1>
       </div> 

       <div className='circles flex  justify-around gap-10  mt-16 text-white'>
        <div className='javascript bg-zinc-900 w-[20vw] h-[60vh] p-10 rounded rounded-tl-3xl rounded-br-3xl'>
          <img className='w-[18vw] h-[26vh]  mt-[-20px]' src={Javascriptlogo} alt=""/>
          <h1 className='font-["Century_Gothic"] text-2xl font-medium'>JAVASCRIPT</h1>
          <h1 className='font-["Century_Gothic"] mt-1'>A versatile and powerful language that drives interactivity on the web. Skilled in using 
            JavaScript for both front-end and back-end development.</h1>
        </div>
        
        <div className='javascript bg-zinc-900 w-[20vw] h-[60vh] p-10  rounded rounded-tl-3xl rounded-br-3xl'>
           <img className='w-[12vw] h-[12vh]  ml-5 mt-[16px]' src={Tailwindlogo} alt="" />
           <div className='note2 mt-16'>
             <h1 className='font-["Century_Gothic"] text-2xl font-medium'>TAILWIND CSS</h1>
             <h1 className='font-["Century_Gothic"] mt-1'>A utility-first CSS framework that makes styling websites faster and more efficient. 
                 Proficient in using Tailwind to create responsive, modern designs with minimal effort.</h1>
           </div> 
        </div>
        
        <div className='javascript bg-zinc-900 w-[20vw] h-[60vh] p-10 rounded rounded-tl-3xl rounded-br-3xl'>
          <img className='w-[14vw] h-[18vh] mb-5' src={Reactlogo} alt="" />
          <div className='note3 mt-8'>
            <h1 className='font-["Century_Gothic"] text-2xl font-medium'>REACT.JS</h1>
            <h1 className='font-["Century_Gothic"] mt-1'>A popular JavaScript library for building dynamic and responsive user interfaces. Experienced in 
               creating reusable components and managing state with React.</h1>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Skills