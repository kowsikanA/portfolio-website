'use client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/info';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
// keep your other imports...

const ProjectFlipCard = ({ project, repoUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full">
      <div style={{ perspective: 1200 }} className="w-full">
        <motion.div
          className="relative w-full min-h-[650px]"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          onHoverStart={() => setIsFlipped(true)}
          onHoverEnd={() => setIsFlipped(false)}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg px-5 py-10 w-full"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              pointerEvents: 'none', // ✅ prevents hover flicker
            }}
          >
            <div className="w-full flex justify-center items-center">
              <img
                className="border-2 border-gray-500 rounded-2xl w-full max-w-[700px] h-[200px] object-cover"
                src={project.image}
                alt="project"
                draggable={false}
              />
            </div>

            <div className="p-6 text-center">
              <h4 className="mb-3 text-xl font-semibold text-slate-800">
                {project.title}
              </h4>
              <p className="text-base text-slate-600 font-light min-h-[160px] px-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg px-5 py-10 w-full"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              pointerEvents: 'none', // ✅ prevents hover flicker
            }}
          >
            <div className="p-6 text-center flex-1 flex flex-col justify-center">
              <h4 className="mb-6 text-xl font-semibold text-slate-800">
                {project.title}
              </h4>

              <p className="text-slate-600 font-light mb-6">
                Languages / Tools Used
              </p>

              <div className="flex flex-wrap justify-center gap-6 px-4">
                {project.languages.map((language, i) => (
                  <img
                    key={i}
                    src={language.link}
                    alt={language.name ? `${language.name} icon` : 'language icon'}
                    className="h-12 w-12 object-contain"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ✅ CLICKABLE BUTTON OVERLAY (stays clickable on both sides) */}
          <div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            style={{ pointerEvents: 'auto' }}
          >
            <button
              className="cursor-pointer border bg-black hover:bg-gray-800 rounded-full px-6 py-3 border-black"
              onClick={() => window.open(repoUrl)}
            >
              <FaGithub className="text-lg text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


  return (
    <section className="min-h-screen flex flex-col items-center px-20 pt-10 pb-20">
      <h2 className="text-5xl font-bold text-white mb-6 mt-20">Projects</h2>

      {/* ✅ Add max width to the grid so cards don’t stretch too wide on huge screens */}
      <div className="w-full max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <ProjectFlipCard
          project={projects[0]}
          repoUrl="https://github.com/kowsikanA/ds-report-medical-insurance"
        />
        <ProjectFlipCard
          project={projects[1]}
          repoUrl="https://github.com/kowsikanA/CarDealership"
        />
        <ProjectFlipCard
          project={projects[2]}
          repoUrl="https://github.com/kowsikanA/simon-game"
        />
      </div>
    </section>
  );
};

export default Projects;
