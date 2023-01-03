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
                    <h2 className='flex flex-col justify-center items-center font-Passions text-7xl sm:text-8xl md:text-8xl lg:text-8xl h-40'>
                        Who I am?</h2>
                </div>
                <div>
                    <p className='flex flex-col justify-center items-center font-Shadows text-sm pr-16 sm:text-sm ml-24 md:text-lg lg:text-xl'>My name is
                        Paola Sanchez, I am a Full Stack programmer with knowledge
                        of Html, CSS, Javascript, Librelias which are React, tailwind, among other technologies,
                        I consider myself a person who is open to learn and teach my knowledge, I am
                        a responsible person, I know how to work in a group, on the other hand I know how to handle the scrum methodology,
                        I characterize myself for contributing ideas, being an autonomous person, asking a lot and looking for the best
                        solutions to a problem.
                        <img className='scale-50 sm:scale-50 h-44 md:scale-50 lg:scale-50 ' src='/src/assets/My project-1 (8).png' />
                    </p>
                </div>
            </section>
        </>
    )
}

export default Abount