import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticlesCard = ({ linkType, image, link, type, title, desc }) => {
  return (
    <>
      {
        linkType === 'hyper'
          ?
          <a href={link} target='_blank' rel='noreferrer' className='flex  flex-col  items-start space-y-3 w-full group h-full cursor-pointer '>
            <div className="max-w-sm lg:max-w-full bg-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-xl mt-4 mb-12 border">
              <div className="overflow-hidden max-h-[15rem] ">
                <img className="w-full scale-110 hover:scale-125 transition-all duration-300" src={image} alt="image" />
              </div>

              <div className="px-6 py-4 space-y-3">
                <span className="inline-block bg-blue-200 text-themeColor rounded-full px-3 py-1 text-sm font-semibold">{type}</span>
                <div className="font-bold text-xl">{title}</div>
                <p className="text-gray-700 text-base">
                  {desc}
                </p>
              </div>

            </div>
            {/* <h2 className='px-2 py-2 rounded-full font-semibold bg-blue-100 w-[180px] text-center  text-blue-500'>{type}</h2>
      <h3 className='font-semibold text-xl w-[300px]'>{title}</h3>
      <p className='text-gray-500 text-sm w-[300px]'>{desc}</p> */}
          </a>
          :
          <Link href={link}>
            <a className='flex  flex-col  items-start space-y-3 w-full group h-full cursor-pointer '>
              <div className="max-w-sm lg:max-w-full bg-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-xl mt-4 mb-12 border">
                <div className="overflow-hidden max-h-[15rem] ">
                  <img className="w-full scale-110 hover:scale-125 transition-all duration-300" src={image} alt="image" />
                </div>

                <div className="px-6 py-4 space-y-3">
                  <span className="inline-block bg-blue-200 text-themeColor rounded-full px-3 py-1 text-sm font-semibold">{type}</span>
                  <div className="font-bold text-xl">{title}</div>
                  <p className="text-gray-700 text-base">
                    {desc}
                  </p>
                </div>

              </div>
              {/* <h2 className='px-2 py-2 rounded-full font-semibold bg-blue-100 w-[180px] text-center  text-blue-500'>{type}</h2>
      <h3 className='font-semibold text-xl w-[300px]'>{title}</h3>
      <p className='text-gray-500 text-sm w-[300px]'>{desc}</p> */}
            </a>
          </Link>
      }
    </>
  )
}

export default ArticlesCard