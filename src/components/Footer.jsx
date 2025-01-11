import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[50vh] bg-zinc-900'>
        <div className='w-1/2 p-14'>
           <h1 className='text-4xl font-semibold font-["Century_Gothic"]'>Contact Us</h1>
        </div>
        <div className='container flex justify-between'>
         <div className='flex gap-16'>
           <div className='pl-14 w-[20vw]'>
             <h1 className='font-["Century_Gothic"] font-light'>Ready to start a project with me? Let's create something amazing together</h1>
           </div>
           <div className='font-["Century_Gothic"] font-light'>
             <h1>viv13handari@gmail.com</h1>
             <h1>+91 7505172363</h1>
           </div>
           <div className='font-["Century_Gothic"] font-light'>
             <h1>Nandprayag chamoli</h1>
             <h1>Utttarakhand</h1>
             <h1>246449</h1>
           </div>
         </div>
         <div className='pr-40  flex flex-col gap-6 font-["Century_Gothic"] font-light'>
           <a href="">Instagram</a>
           <a href="">Linked In</a>
           <a href="">Github</a>
         </div>
        </div>
      

    </div>
  )
}

export default Footer