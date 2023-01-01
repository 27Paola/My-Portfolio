import React from 'react'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className='flex flex-row justify-end items-end h-20 sm:h-24 md:h-28 lg:h-20'>
          <img className='scale-50 h-12 sm:h-14 md:h-16 lg:h-20' src={Logo} alt="" />
        </div>

       
      </div>
    </>
  )
}

export default Projects