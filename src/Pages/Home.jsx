import React from 'react'
import Navbar from '../Compenents/Navbar'
import nutone from '../assets/nutone.png'
import { NavLink } from 'react-router-dom'
    

const Home = () => {
  return (
    <>
    <Navbar/>

    <section>
        <div>
            <h2 className='font-Passions text-center decoration-8 text-9xl text-black'>¡Bienvenidos!</h2>
        </div>
        <div>
        <img className='nutone z-30 hidden lg:block lg:w-9/12 items-center scale-50' src={nutone} alt=""/>
        </div>
        <div>
            <h3 className='font-Passions text-center text-8xl text-black'>¡A mi Portafolio!</h3>
        </div>
        <div>
        <NavLink to={'Projects'}><button className='Ver Mas'></button></NavLink>
        </div>
    </section>
    </>
  )
}
export default Home