import Image from 'next/image'
import React from 'react'

const ArticlesCard = ({image,type,title,desc}) => {
  return (
    <div className='flex flex-col  items-start space-y-3 w-full group h-full cursor-pointer '>
        <Image src={image} className='w-full h-full object-contain rounded-xl transition-all ease-in-out duration-200 group-hover:scale-110' width={300} height={200} />
        <h2 className='px-2 py-2 rounded-full font-semibold bg-blue-100 w-[180px] text-center  text-blue-500'>{type}</h2>
        <h3 className='font-semibold text-xl w-[300px]'>{title}</h3>
        <p className='text-gray-500 text-sm w-[300px]'>{desc}</p>
    </div>
  )
}

export default ArticlesCard