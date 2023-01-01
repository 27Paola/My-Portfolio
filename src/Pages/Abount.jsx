import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'


const Abount = () => {
    return (
        <>
            <Navbar />

            <section>
                <div className='flex flex-row justify-end items-center '>
                    <img className='scale-50 h-12 sm:h-14 md:h-16 lg:h-20' src={Logo} alt="" />
                </div>
                <div>
                    <h2 className='flex flex-col justify-center items-center font-Passions text-6xl sm:text-7xl md:text-7xl lg:text-8xl h-40'>¿Quien soy?</h2>
                </div>
                <div className=''>
                    <p className='flex flex-col justify-center items-center font-Shadows text-sm pr-16 sm:text-sm ml-24 md:text-lg lg:text-xl'>Mi Nombre es
                        Paola Sanchez, soy una programadora Full Stack  con un conocimiento
                        de Html, CSS, Javascript, Librelias las cuales son React, tailwind, entre otras tegnologias,
                        Me considero una persona que esta abierta para aprender y enseñar mis conocimientos, soy
                        una persona responsable, se trabajar en grupo, por otra parte se manejar la metodologia scrum,
                        me caracterizo por aportar ideas, ser una persona autonoma, preguntar mucho  y buscar las mejores
                        soluciones a un problema.
                        <img className='scale-50 sm:scale-50 h-44 md:scale-50 lg:scale-50 ' src='/src/assets/My project-1 (8).png' />
                        </p>
                </div>
            </section>
        </>
    )
}

export default Abount