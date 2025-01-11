import React from 'react'
import {motion} from 'framer-motion';

const Marquee = () => {
    
  return (
    <div className='w-full py-8 rounded-tr-3xl rounded-tl-3xl bg-purple-800'> 
       <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-16 overflow-hidden whitespace-nowrap'>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[18vw] leading-none font-["Haettenschweiler"] uppercase'>i am keul</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[18vw] leading-none font-["Haettenschweiler"] uppercase'>i am kuel</motion.h1>
       </div> 
    </div>
  )
}

export default Marquee