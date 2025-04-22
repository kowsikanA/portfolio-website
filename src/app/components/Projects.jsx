
'use client';
import React, { useState } from 'react'
import {FaGithub} from 'react-icons/fa'
import { projects } from '@/data/info';


const Projects = () => {

  const [activeTab, setActiveTab] = useState({
    0: 'overview',
    1: 'overview',
    2: 'overview'
  })

  const handleTabClick = (index, tab) => {
    setActiveTab((prev) => Object.assign({}, prev, { [index]: tab }));
  }

  return (

    <section className='min-h-screen flex flex-col items-center justify-center px-20 pt-10 py-20'>
      <h2 className='text-5xl font-bold text-white mb-6 mt-20'>Projects</h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

        {/* First Project */}
        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 mx-6 px-5 w-full py-10 min-h-[650px]">
          <div className="rounded-md w-full  flex justify-center items-center">
          <img
            className='border-2 border-gray-500 rounded-2xl'
              src={projects[0].image}
              style={{width : '700px', height: '200px'}}
              alt="third proj" />

          </div>
          <div className="p-6 text-center">

            <h4 className="mb-1 text-xl font-semibold text-slate-800">
              {projects[0].title}
            </h4>
            <div className='flex justify-center mt-4 mb-2'>
              <button
                onClick={() => handleTabClick(0, 'overview')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[0] === 'overview'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabClick(0, 'languages')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[0] === 'languages'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Languages
              </button>
            </div>


            <div className="mt-4 text-center px-5 min-h-[160px]">
              {activeTab[0] === 'overview' && (
                <p className='text-base text-slate-600 font-light '>
                  {projects[0].description}
                </p>
              )}
              {activeTab[0] === 'languages' && (
                <div className='text-base text-slate-600 font-light'>
                  <div className="flex flex-wrap justify-center gap-6 px-8 pb-8 pt-4">
                    {projects[0].languages.map((language, index) => (
                      <img
                        key={index}
                        src={language.link}
                        className='h-10 w-10 object-contain'
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className='flex justify-around'>
            <button className='cursor-pointer border bg-black hover:bg-gray-800 rounded-full px-6 py-3 border-black text-black' onClick={() => window.open('https://github.com/kowsikanA/ds-report-medical-insurance')} ><FaGithub className="text-lg text-white"/></button>
          </div>


        </div>

        {/* Second Project */}

        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6  mx-6 w-full py-10 px-5 min-h-[650px]">
          <div className="rounded-md w-full  flex justify-center items-center">
          <img
          className='border-2 border-gray-500 rounded-2xl'
              src={projects[1].image}
              style={{width : '800px', height: '200px'}}
              alt="third proj" />

          </div>
          <div className="p-6 text-center">

            <h4 className="mb-1 text-xl font-semibold text-slate-800">
              {projects[1].title}
            </h4>
            <div className=' flex justify-center mt-4 mb-2'>
              <button
                onClick={() => handleTabClick(1, 'overview')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[1] === 'overview'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabClick(1, 'languages')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[1] === 'languages'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Languages
              </button>
            </div>


            <div className="mt-4 text-center px-4 min-h-[160px]">
              {activeTab[1] === 'overview' && (
                <p className='text-base text-slate-600 font-light '>
                  {projects[1].description}
                </p>
              )}
              {activeTab[1] === 'languages' && (
                <div className='text-base text-slate-600 font-light'>
                  <div className="flex flex-wrap justify-center gap-6 px-8 pb-3 pt-4">
                    {projects[1].languages.map((language, index) => (
                      <img
                        key={index}
                        src={language.link}
                        className='h-10 w-10 object-contain'
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>


            
          </div>
         
          <div className='flex justify-around'>
            <button className='cursor-pointer border bg-black hover:bg-gray-800  rounded-full px-6 py-3 border-black text-black' onClick={() => window.open('https://github.com/kowsikanA/CarDealership')}><FaGithub className="text-lg text-white"/></button>
          </div>
        </div>


        {/* Third Project */}

        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-full  mx-6 py-10 px-5 min-h-[650px]">
          <div className="rounded-md w-full  flex justify-center items-center">
            <img
              className='border-2 border-gray-500 rounded-2xl'
              src={projects[2].image}
              style={{width : '600px', height: '200px'}}
              alt="third proj" />

          </div>
          <div className="p-6 text-center">

            <h4 className="mb-1 text-xl font-semibold text-slate-800">
              {projects[2].title}
            </h4>
            <div className='flex justify-center mt-4 mb-2'>
              <button
                onClick={() => handleTabClick(2, 'overview')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[2] === 'overview'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabClick(2, 'languages')}
                className={`cursor-pointer px-4 py-2 text-sm font-medium border-b-2 ${activeTab[2] === 'languages'
                  ? 'border-slate-800 text-slate-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
              >
                Languages
              </button>
            </div>


            <div className="mt-4 text-center px-4 min-h-[160px]">
              {activeTab[2] === 'overview' && (
                <p className='text-base text-slate-600 font-light '>
                  {projects[2].description}
                </p>
              )}
              {activeTab[2] === 'languages' && (
                <div className='text-base text-slate-600 font-light'>
                  <div className="flex flex-wrap justify-center gap-6 px-8 pb-3 pt-4">
                    {projects[2].languages.map((language, index) => (
                      <img
                        key={index}
                        src={language.link}
                        className='h-10 w-10 object-contain'
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>


            
          </div>
         
          <div className='flex justify-around'>
            <button className='cursor-pointer border  bg-black hover:bg-gray-800  rounded-full px-6 py-3 border-black text-black' onClick={() => window.open('https://github.com/kowsikanA/simon-game')}><FaGithub className="text-lg text-white"/></button>
          </div>
        </div>



      </div>


    </section>
  )
}

export default Projects
