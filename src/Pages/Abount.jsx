import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'


const Abount = () => {
  return (
    <>
        <Navbar/>
        
        <section>
            <div>
                <img className='Logo z-30  lg:w-9/12 md:w-60 scale-50' src={Logo} alt="" />
            </div>
            <div>
                <h2 className='flex flex-col justify-center items-center font-Passions text-8xl'>¿Quien soy?</h2>
            </div>
            <div>
                <p className='flex flex-col justify-center items-center font-Shadows text-2xl py-14 px-14'>Mi Nombre es 
                Paola Sanchez, soy una programadora Full Stack  con un conocimiento
                de Html, CSS, Javascript, <dr/>Librelias las cuales son React, tailwind, entre otras tegnologias,
                Me considero una persona que esta abierta <dr/>para aprender y enseñar mis conocimientos, soy 
                una persona responsable, se trabajar en grupo, por otra parte<dr/> se manejar la metodologia scrum,
                me caracterizo por aportar ideas, ser una persona autonoma, preguntar mucho <dr/> y buscar las mejores 
                soluciones a un problema.</p>
            </div>
            
        </section>
    </>
  )
}

export default Abount