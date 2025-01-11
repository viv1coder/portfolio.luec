import React from 'react'

const Landingpage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-44 px-20'>
            <div className='masker  font-["Bebas_Neue"] mb-20 '>
                <h1  className='text-8xl text-[8vw] leading-[7vw] '>I'm a</h1>
                <h1  className='text-8xl  text-[10vw] leading-[8vw]'>Fullstack Webdevor</h1>
                <div  className='text-8xl text-[8vw] leading-[7vw] w-fit flex gap-2'>
                    <div className='bg-purple-500 w-[8vw] h-[5.7vw] mt-1 rounded'>
                        <h1 className='text-2xl text-black font-light py-3 px-6 font-["Bebas_Neue"]'>only for desktop</h1>
                    </div>
                    <div>Vivek Bhandari</div>
                </div>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-34 h-1'></div>
        <div className='text-center font-thin text-xl mt-4'>
            <h1>scroll to discover</h1>
        </div>
    </div>
  )
}

export default Landingpage
