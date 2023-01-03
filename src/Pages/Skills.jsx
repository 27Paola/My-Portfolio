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
          <h1 className='flex flex-row justify-center items-center font-Passions text-8xl h-26'>Habilidades</h1>
        </div>

        <div>
          <p className='flex flex-col justify-center items-center font-Shadows text-sm pr-16 sm:text-sm ml-24 md:text-lg lg:text-xl'>Yo me caracterizo mucho por que me gusta aprender, aqui te voy a contar un poco de lo que se y mi experiencia programando en este tiempo, claro un poco corto pero ha sido de mucho aprendizaje y nutricion en mi y en lo que puedo llegar a desenvolverme en la programacion. </p>
        </div>
      </div>

    </>
  )
}

export default Skills