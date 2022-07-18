import Image from 'next/image'
import React from 'react'

const TeamExpert = ({img}) => {
  return (
    <div className='rounded-xl transition-all ease-in-out duration-150 hover:scale-105 w-[270px] lg:w-[350px]'>
<img src={img} className='object-contain w-full h-full rounded-2xl' />
    </div>
  )
}

export default TeamExpert