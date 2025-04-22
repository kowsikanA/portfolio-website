import React from 'react'
import { code_skills } from '@/data/info'


const SkillsSection = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Skills
        </p>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-4 lg:grid-rows-2 ">

          <div className="relative lg:row-span-2 transition-transform duration-300 hover:-translate-y-2">

            <div className=" bg-white relative flex h-full flex-col overflow-hidden rounded-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-center text-3xl  tracking-tight font-bold text-gray-950 max-lg:text-center py-10">
                  Front End
                </p>

              </div>
              <div className="flex flex-wrap justify-center gap-6 px-8 pb-8 pt-4">
                {code_skills[0].icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.link}
                    alt={icon.alt}
                    className='h-16 w-16 object-contain'
                    title={icon.alt}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-[2rem]"></div>
          </div>


          <div className="relative lg:row-span-2  transition-transform duration-300 hover:-translate-y-2">

            <div className=" bg-white relative flex h-full flex-col overflow-hidden rounded-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-950 max-lg:text-center py-10">
                  Back End
                </p>

              </div>
              <div className="flex flex-wrap justify-center gap-6 px-8 pb-8 pt-4">
                {code_skills[1].icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.link}
                    alt={icon.alt}
                    className='h-16 w-16 object-contain'
                    title={icon.alt}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-[2rem]"></div>
          </div>



          <div className="relative lg:row-span-2  transition-transform duration-300 hover:-translate-y-2">

            <div className=" bg-white relative flex h-full flex-col overflow-hidden rounded-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-950 max-lg:text-center py-10">
                  Software Development
                </p>

              </div>
              <div className="flex flex-wrap justify-center gap-6 px-8 pb-8 pt-4">
                {code_skills[2].icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.link}
                    alt={icon.alt}
                    className='h-16 w-16 object-contain'
                    title={icon.alt}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-[2rem]"></div>
          </div>


          <div className="relative lg:row-span-2  transition-transform duration-300 hover:-translate-y-2">

            <div className=" bg-white relative flex h-full flex-col overflow-hidden rounded-[2rem]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-950 max-lg:text-center py-10">
                  Mobile Development
                </p>

              </div>
              <div className="flex flex-wrap justify-center gap-6 px-8 pb-8 pt-4">
                {code_skills[3].icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.link}
                    alt={icon.alt}
                    className='h-16 w-16 object-contain'
                    title={icon.alt}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-[2rem]"></div>
          </div>
        </div>

        <div className='mt-6 rounded-[2rem] bg-white p-6 shadow-md lg:mx-auto lg:max-w-7xl  transition-transform duration-300 hover:-translate-y-2'>
          <div className='text-center'>
            <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-950 max-lg:text-center py-10">
              Other Tools
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-6 px-8 pb-4'>

            {code_skills[4].icons.map((icon, index) => (
              <img
                key={index}
                src={icon.link}
                alt={icon.alt}
                className='h-16 w-16 object-contain'
                title={icon.alt}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsSection