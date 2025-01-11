import React from 'react'
import Calc from "../imgs/calculatorimg.jpg"
import Todo from "../imgs/tasktrackerimg.jpg"
import Weather from "../imgs/weatherimage.jpg"
import Ecom from "../imgs/Ecomimg.jpg"


const Projects = () => {
  return (
    <div className='w-full py-10 '>
         <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-8 '>
            <h1 className='text-6xl font-semibold font-["Century_Gothic"]'>Featured Projects</h1>
         </div>
         <div className='cards gap-16 flex flex-row mt-10 p-10 text-3xl font-semibold font-["Century_Gothic"]'>
            <div className='card w-[20vw] h-[55vh] rounded  text-black bg-white'>
              <img src={Calc} alt="" />
              <a className='px-20' href="">CALC</a>
            </div>
            <div className='card w-[20vw] h-[55vh] rounded  text-black bg-white'>
              <img src={Todo} alt="" />
              <a className='px-20' href="">TODO</a>
            </div>
            <div className='card w-[20vw] h-[55vh] rounded  text-black bg-white'>
              <img src={Weather} alt="" />
              <a className='px-20' href="">WEATHER</a>
            </div>
            <div className='card w-[20vw] h-[55vh] rounded  text-black bg-white'>
              <img src={Ecom} alt="" />
              <a className='px-20' href="">ECOM</a>
            </div>
         </div>
         <h1 className='font-["Century_Gothic"] tracking-tight text-4xl px-14 py-6'>
         The following projects are currently under maintenance or being upgraded. They
          will be back online soon with improvements. Thank you for your patience!


         </h1>
    </div>
  )
}

export default Projects