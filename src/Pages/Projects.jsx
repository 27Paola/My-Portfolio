import React from 'react'
import Navbar from '../Compenents/Navbar'
import Logo from '../assets/Logos_PS (3).png'
import Book from '../assets/bookPink.png'
import tools from '../assets/tools.png'
import notebook from '../assets/notebook.png'
import chiken from '../assets/chiken.png'
import cow from '../assets/cow.png'
import raccon from '../assets/raccon.png'
import { FaGithubAlt } from "react-icons/fa"
import { BsFillPlayCircleFill } from "react-icons/bs"
const Projects = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className='flex flex-row justify-end items-end h-20 sm:h-24 md:h-28 lg:h-20'>
          <img className='scale-50 h-12 sm:h-14 md:h-16 lg:h-20' src={Logo} alt="" />
        </div>
        <div>
          <h1 className='flex flex-row justify-center items-center font-Passions text-8xl '>Projects</h1>
        </div>
        <br />

        <div className='grid grid-col justify-center items-center gap-16 gap-y-8  h-24 sm:grid-cols-2 scale-90   lg:grid-cols-3 '>

          <div className=''>
            <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
              <h3 className='bg-white rounded-3xl text-center text-7xl'>Horimiya</h3>
              <div className='grid grid-row justify-center items-center'>
                <div className=' h-36 rounded-2xl flex flex-row '>
                  <img className='scale-55' src={chiken} alt='' />
                  <div>
                    <p className='font-Shadows text-xl my-8'>Project which explains the beginning, intermediate and outcome of the story.</p>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 items-start pl-20'>
                <a href="https://github.com/27Paola/Horimiya.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
                <a href="https://horimiya-sa3s.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
              </div>
            </div>
          </div>

          <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
            <h3 className='bg-white rounded-3xl text-center text-7xl'>Dezzer</h3>
            <div className='grid grid-row justify-center items-center'>
              <div className=' h-36 rounded-2xl flex flex-row '>
                <img className='scale-55' src={tools} alt='' />
                <div>
                  <p className='font-Shadows text-xl my-8'>Project which shows us a little more about music and in different genres.</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start pl-20'>
              <a href="https://github.com/27Paola/deezer-paola-.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
              <a href="https://deezer-paola.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
            </div>
          </div>

          <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
            <h3 className='bg-white rounded-3xl text-center text-7xl'>Zshop</h3>
            <div className='grid grid-row justify-center items-center'>
              <div className=' h-36 rounded-2xl flex flex-row '>
                <img className='scale-55' src={notebook} alt='' />
                <div>
                  <p className='font-Shadows text-xl my-8'>Project brings us different news, fashion, singers among other things. </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start pl-20'>
              <a href="https://github.com/27Paola/Proyecto-zShop.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
              <a href="https://proyecto-zshop.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
            </div>
          </div>

          <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
            <h3 className='bg-white rounded-3xl text-center text-7xl'>Calculator</h3>
            <div className='grid grid-row justify-center items-center'>
              <div className=' h-36 rounded-2xl flex flex-row '>
                <img className='scale-55' src={Book} alt='' />
                <div>
                  <p className='font-Shadows text-xl my-8'>Calculator project where I did the basic operations. </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start pl-20'>
              <a href="https://github.com/27Paola/Calculadora-.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
              <a href="https://calculadora-six-rho.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
            </div>
          </div>

          <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
            <h3 className='bg-white rounded-3xl text-center text-7xl'>Tetris</h3>
            <div className='grid grid-row justify-center items-center'>
              <div className=' h-36 rounded-2xl flex flex-row '>
                <img className='scale-55' src={cow} alt='' />
                <div>
                  <p className='font-Shadows text-xl my-4'>Classic project where you can play Tetris easily and you can have fun, find entertainment while playing.</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start pl-20'>
              <a href="https://github.com/27Paola/Tetris.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
              <a href="https://tetris-psi-ten.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
            </div>
          </div>

          <div className='bg-[#a799ff] p-4 rounded-3xl font-Passions text-5xl'>
            <h3 className='bg-white rounded-3xl text-center text-7xl'>Roulette</h3>
            <div className='grid grid-row justify-center items-center'>
              <div className=' h-36 rounded-2xl flex flex-row '>
                <img className='scale-55' src={raccon} alt='' />
                <div>
                  <p className='font-Shadows text-xl my-4'>Project was made with the purpose of not having a traditional roulette, which is a different roulette.</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 items-start pl-20'>
              <a href="https://github.com/adrianapico/Sacrificios-de-coders.git" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><FaGithubAlt className='text-5xl items-center' /></a>
              <a href="https://sacrificios-de-coders.vercel.app/" target={'_blank'} className='rounded-bl-lg w-1/2 h-12 flex justify-center items-center  text-black font-bold font-Sniglet'><BsFillPlayCircleFill className='text-5xl' /></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects