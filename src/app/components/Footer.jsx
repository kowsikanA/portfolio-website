'use client'
import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

  function getYear() {
    return new Date().getFullYear();
  }
    return (
      <footer className='w-full flex justify-around align-center py-4 text-white'>
        <FaLinkedin  className='cursor-pointer w-10 h-10' onClick={() => window.open('https://www.linkedin.com/in/kowsikan-arudchelvan-491695275/')}/>
        <h2 className='text-2xl'>© {getYear()} - Kowsikan  Arudchelvan</h2>
        <FaGithub  className='cursor-pointer w-10 h-10' onClick={() => window.open('https://github.com/kowsikanA')}/>
      </footer>
    )
  }


export default Footer