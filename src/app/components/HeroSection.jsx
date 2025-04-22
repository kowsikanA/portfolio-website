"use client"

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesComponent from './ui/ParticlesComponent';


const HeroSection = () => {
  return (
    <section className='min-h-screen grid place-items-center relative text-center px-4'>

      <div className="absolute inset-0 -z-10">
        <ParticlesComponent/>
      </div>



        <div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='bg-clip-text  text-white'>
              Hello, I'm Kowsikan Arudchelvan
              {" "}
            </span> 
            <br />
            <div className='py-5 text-3xl '>
              I am an aspiring <TypeAnimation
              sequence={[
                'Software Developer',
                1000, 
                'Software Engineer',
                1000,
                'Web Developer',
                1000,
                'Mobile Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.875rem', display: 'inline-block', color: '#00FFFF' }}
              repeat={Infinity}
            />
            </div>  
            
          
          </h1>
         
        </div>
    </section>
  )
}

export default HeroSection