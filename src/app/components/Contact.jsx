'use client'
import React from 'react'
import { FaUser, FaEnvelope, FaBook } from "react-icons/fa";


const Contact = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "9840fcbe-22eb-4136-8ff0-6e5a978bcbfb",
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            subject: e.target.subject.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white py-10">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className='flex gap-4' >

            <div className='w-1/2'>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>

              <div className="relative">
                <span className='absolute inset-y-0 left-0 flex  items-center pl-4'>
                  <FaUser className='text-gray-50  text-sm' />
                </span>
                <input type="text" id="firstName" name="firstName" className="pl-12 shadow-sm bg-gray-700  text-white text-sm rounded-lg  block w-full p-2.5" required />

              </div>

            </div>

            <div className='w-1/2'>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>

              <div className="relative">
                <span className='absolute inset-y-0 left-0 flex  items-center pl-4'>
                  <FaUser className='text-gray-50  text-sm' />
                </span>
                <input type="text" id="lastName" name="lastName" className="pl-12 shadow-sm bg-gray-700 border text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required />

              </div>

            </div>

          </div>

          <div className='w-full'>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium  dark:text-gray-300">Subject</label>

            <div className="relative">
              <span className='absolute inset-y-0 left-0 flex  items-center pl-4'>
                <FaBook className='text-gray-50  text-sm' />
              </span>
              <input type="text" id="subject" name="subject" className="pl-12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />

            </div>

          </div>

          <div className='w-full'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  dark:text-gray-300">Email Address</label>

            <div className="relative">
              <span className='absolute inset-y-0 left-0 flex  items-center pl-4'>
                <FaEnvelope className='text-gray-50  text-sm' />
              </span>
              <input type="email" id="email" name="email" className="pl-12 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />

            </div>

          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="cursor-pointer py-3 px-6 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact