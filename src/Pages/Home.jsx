import React from 'react'
import Navbar from '../Compenents/Navbar'
import nutone from '../assets/nutone.png'
import { Form, NavLink } from 'react-router-dom'
import index from '/src/index.css'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container '>

      
        <div className='flex flex-row justify-between items-center h-20 sm:h-24 md:h-28 lg:h-20'>
          <button class="bg-indigo-500 opacity-75 ..."></button>
          <img className='scale-50 h-12 sm:h-14 md:h-16 lg:h-20' src='/src/assets/Logos_PS (3).png' />
        </div>

        <div className='bg-[#ffa5cf] w-2/3 h-auto items-center m-auto rounded-3xl'>
          <div>
            <h2 className='text-center font-Passions text-6xl text-black sm:text-8xl md:text-8xl lg:text-8xl '>¡Bienvenidos!</h2>
          </div>
          <div className='w-4/12 h-1/5 m-auto'>
            <img className='scale-150 mt-12 sm:scale-95 md:scale-95 lg:scale-75' src={nutone} alt="" />
          </div>
          <div>
            <h3 className='font-Passions text-center text-6xl text-black mt-10 sm:text-8xl md:text-8xl lg:text-8xl'>¡A mi Portafolio!</h3>
          </div>
          <div>
            <NavLink to={'Projects'}><button className='Ver Mas'></button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home