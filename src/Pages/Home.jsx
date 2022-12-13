import React from 'react'
import Navbar from '../Compenents/Navbar'
import Squirrel from '../assets/My project-1 (7).png'
import { NavLink } from 'react-router-dom'
    

const Home = () => {
  return (
    <>
    <Navbar/>

    <section>
        <div>
            <h2 className='font-Love text-center text-black'>¡BIENVENIDOS!</h2>
        </div>
        <div>
        <img className='imgone z-30 hidden lg:block lg:w-9/12 items-center' src={Squirrel} alt="" />
        </div>
        <div>
            <h3 className='font-love text-center text-black'> A mi Portafolio</h3>
        </div>
        <div>
        <NavLink to={'Projects'}><button className='Ver Mas'></button></NavLink>
        </div>
    </section>
    </>
  )
}
export default Home