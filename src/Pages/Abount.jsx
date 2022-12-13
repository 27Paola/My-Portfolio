import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'
import '../App.css'


const Abount = () => {
  return (
    <>
        <Navbar/>
        
        <section>
            <div>
                <h2>¿Quien soy yo?</h2>
            </div>
            <div>
                <p>Soy Paola Sanchez</p>
            </div>
            <div>
                <img className='Logo z-30  lg:w-9/12 md:w-60' src={Logo} alt="" />
            </div>
        </section>
    </>
  )
}

export default Abount