'use client'
import React from 'react'
import Image from 'next/image'


const AboutsSection = () => {
  return (
    
    <section className='text-white min-h-screen py-20'>
      <div className='flex justify-center'>
        <h2 className='text-5xl font-bold py-20'>About Me</h2>
      </div>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-[250px] h-[270px] rounded-full overflow-hidden border-4 border-dotted py--5 -mt-1'>
            <Image
              src="/images/About-photo.jpg"
              width={250}
              height={270}
              alt="This is me"
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <button className='cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gray-500 hover:bg-gray-400 font-bold text-white' onClick={() => window.open('https://drive.google.com/file/d/1KbfUvfVoWSr6B8wBe6piQrX3WOmVugpy/view?usp=sharing')} >Resume</button>
            <button className='cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black hover:bg-gray-800 font-bold text-white' onClick={() => window.open('https://github.com/kowsikanA?tab=repositories')}>GitHub</button>
            <button className='cursor-pointer px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-blue-500 hover:bg-blue-700 font-bold text-white ' onClick={() => window.open('https://www.linkedin.com/in/kowsikan-arudchelvan-491695275/')}>Linkedin</button>
          </div>
        </div>
        <div className="text-left md:pl-10">

          <ul className='list-disc list-inside space-y-2 text-lg'>
            <li>🎓 Third-year Computer Science student at Ontario Tech University</li>
            <li>💻 Passionate about technology and curious about how things work</li>
            <li>👨‍💻 Enjoys programming, problem-solving, and exploring new software</li>
            <li>📚 Committed to continuous learning and personal growth</li>
            <li>🚀 Always looking for ways to challenge myself and apply my knowledge meaningfully</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutsSection