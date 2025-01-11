import React from 'react'
import img1 from "../imgs/Hackathonpic.jpg"
import img2 from "../imgs/interncerti.jpg"; 


const Experience = () => {
  return (
    <div className='w-full px-16 py-5 bg-purple-400 rounded-tl-3xl rounded-tr-3xl text-black '>
      <div className='Hackathon'>
         <div className='w-full flex  mt-10 border-purple-300'>
           <div className='w-1/2'>
             <h1 className='text-5xl font-custom2 font-semibold'>Experience</h1>
             <h1 className='mt-10 text-3xl font-custom2 mb-3 font-semibold'>Hack with utttarakhand(Hackathon)</h1>
             <div className='w-[40vw] font-custom2 tracking-tight text-2xl'>
                My experience at my first hackathon, held at THDC IHT in Tehri Garhwal and organized by Hack with Uttarakhand,
                was incredibly enriching. It was an amazing opportunity to immerse myself in the world of web development and
                collaborate with passionate individuals. From the moment I started working on my project, I realized how much
                I love creating dynamic, user-friendly web applications that solve real-world problems. The experience further
                fueled my passion for web development, and I am more determined than ever to hone my skills and contribute to 
                the tech community. The event not only allowed me to test my abilities under pressure but also inspired me 
                to explore new ideas and techniques, reinforcing my deep interest in web development as both a craft and a career.
              </div>
            </div>
            <div className='w-[80vh] h-[70vh] ml-20 mt-20 rounded-3xl bg-purple-500'>
              <img className='w-[80vh] h-[70vh] rounded-3xl' src={img1} alt="Hackathon picture"/>
            </div>
          </div>
      </div>
      <div className='Internship mb-10'>
      <div className='w-full flex  mt-10 border-purple-300'>
      <div className='w-[90vw] h-[60vh] mt-10 rounded-3xl bg-purple-500'>
              <img className=' rounded-3xl' src={img2} alt="Hackathon picture"/>
            </div>
          <div className='w-1/2 ml-20'>
             <h1 className='mt-10 text-3xl font-["Century_Gothic"] mb-3 font-semibold'>Internship by CodexIntern</h1>
             <div className='w-[40vw] font-custom2 tracking-tight text-2xl'>
               I had the incredible opportunity to attend my first internship with Codex Intern, and it was a fantastic experience.
               During my time there, I was able to apply my knowledge to real-world projects, which greatly enhanced my skills and
               understanding of the industry. I worked on several projects, each offering unique challenges that allowed me to 
               grow both technically and professionally. The internship also provided me with valuable insights into teamwork, 
               problem-solving, and meeting deadlines in a professional environment. I am proud to have completed the internship 
               and received a certificate of completion, which further motivates me to continue pursuing my passion for web 
               development and further develop my skill set.
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Experience
