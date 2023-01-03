import React from 'react'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'

const Skills = () => {
  return (
    <>
      <Navbar />

      <div>
        <div className='flex flex-row justify-end items-end h-20 sm:h-24 md:h-28 lg:h-20'>
          <img className='scale-50 h-12 sm:h-14 md:h-16 lg:h-20' src={Logo} alt="" />
        </div>
        <div>
          <h1 className='flex flex-row justify-center items-center font-Passions text-8xl h-26'>Abilities</h1>
        </div>

        <div>
          <p className='flex flex-col justify-center items-center font-Shadows text-sm pr-16 sm:text-sm ml-24 md:text-lg lg:text-xl'>I characterize myself a lot because I like to learn, here I am going to tell you a little about what I know and my experience programming in this time, of course a little short but it has been a lot of learning and nutrition for me and what I can achieve Develop myself in programming. </p>
        </div>
      </div>

    </>
  )
}

export default Skills