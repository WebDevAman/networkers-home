import React from 'react'
import {RiStarSFill} from 'react-icons/ri'
import Image from 'next/image'

const ReviewCard = ({stars,desc,name}) => {
  return (
    <div className='bg-white border-[1.5px] rounded-lg p-4 space-y-3 hover:shadow-xl mt-10  hover:scale-110 transition-all ease-in-out duration-150 flex flex-col items-start max-w-screen  w-[400px]'>
        <div className='flex space-x-1'>

  {stars.map((star)=>(
      <RiStarSFill className='text-orange-400' />
      ))}
      </div>

<div className='text-sm text-gray-500 text-left'>
    {desc}
</div>

<div className='flex space-x-3 items-center'>
<img src='/assets/images/reviewDp.png'  objectFit='contain' />
<h2 className='font-semibold text-gray-500'>{name}</h2>
</div>

    </div>
  )
}

export default ReviewCard