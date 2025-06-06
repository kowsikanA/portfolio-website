"use client"; 
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay' 
import Image from 'next/image'

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Skills",
    path: "#skills"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  },
  
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? ' backdrop-blur-md bg-black/50' : 'bg-transparent'}`}>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"} 
          className='text-2xl md:text-5xl text-white font-semibold'
        >

          <Image
            src="/images/portfolio-logo.png"
            width={100}
            height={60}
            alt="logo"
            className='object-contain'
            />
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
                <button onClick={() =>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                  <Bars3Icon className='h-5 w-5'/>
                </button>
            ) : (
              <button onClick={() =>setNavbarOpen(false)}  className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className='h-5 w-5'/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                )
              )
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar