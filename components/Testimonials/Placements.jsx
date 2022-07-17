import Image from 'next/image'
import React from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { motion } from 'framer-motion'

const Placements = () => {
  return (
    <div className=" p-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 lg:pl-20 place-content-center place-items-center max-w-screen  items-center">
      <div data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="800"
      className="flex items-center text-center lg:text-left lg:items-start flex-col space-y-5 lg:space-y-5">
        <h1 className='font-extrabold  text-purple-800  text-5xl  md:text-7xl'>Unlimited Learning</h1>
        <h1 className='font-extrabold text-gray-700 text-5xl  md:text-7xl'>Unbeatable Placements</h1>

        <p className='text-sm text-gray-600 font-medium'>
          CCIE training, Networking, Cloud, and Cyber security certification
          training with 100% placement. Lifetime access to Recorded Video
          content. In accordance with current occupational needs, we have
          designed our courses on live technology and real-time scenarios. We
          are Industry leaders in Online, classroom, and corporate training for
          more than 100+ in-demand IT Certifications
        </p>
        <div className='flex items-center gap-10 py-4'>

<p className='flex items-center space-x-3'> <IoIosCheckmarkCircle className='text-xl text-green-500' />  <span>Top Brand MNC Placements</span> </p>
<p className='flex items-center space-x-3'><IoIosCheckmarkCircle className='text-xl text-green-500' /> <span>Lifetime Video access</span> </p>

        </div>
      </div>

<div data-aos="fade-left"
data-aos-delay="800"
data-aos-duration="800"
className='w-[170px] sm:w-[200px] md:[450px] lg:w-[600px]  lg:h-[600px]'>
    <img src={'/assets/images/placement.png'} className='w-full h-full object-cover'  />
</div>

    </div>
  )
}

export default Placements
