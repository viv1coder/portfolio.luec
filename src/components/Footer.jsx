import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[50vh] font-custom2 bg-zinc-900'>
        <div className='w-1/2 p-14'>
           <h1 className='text-4xl font-semibold '>Contact Us</h1>
        </div>
        <div className='container flex justify-between'>
         <div className='flex gap-16'>
           <div className='pl-14 w-[20vw]'>
             <h1 className=' font-light'>Ready to start a project with me? Let's create something amazing together</h1>
           </div>
           <div className=' font-light'>
             <h1>viv13handari@gmail.com</h1>
             <h1>+91 7505172363</h1>
           </div>
           <div className=' font-light'>
             <h1>Nandprayag chamoli</h1>
             <h1>Utttarakhand</h1>
             <h1>246449</h1>
           </div>
         </div>
         <div className='pr-40  flex flex-col gap-6  font-light'>
           <a href="https://www.instagram.com/viviiiee27?utm_source=qr&igsh=MWNkY2trZ3RseGw3eg==">Instagram</a>
           <a href="https://www.linkedin.com/in/vivek-bhandari-b57a2b302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linked In</a>
           <a href="https://github.com/viv1coder/viv1coder">Github</a>
         </div>
        </div>
      

    </div>
  )
}

export default Footer