import React from 'react'

const Footer = () => {

  function getYear() {
    return new Date().getFullYear();
  }
    return (
      <footer className='w-full flex justify-center align-center py-4'>
        <h2 className='text-2xl'>© {getYear()} - Kowsikan  Arudchelvan</h2>
      </footer>
    )
  }


export default Footer