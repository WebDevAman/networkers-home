import React from 'react'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Link from 'next/link'

const CourseCard = ({ title, desc, projects, img, i }) => {
  return (
    <Link href='/'>
      <a
        data-aos="zoom-out"
        data-aos-delay={`${i * 3}00`}
        data-aos-duration="800"
        className={``}>
        <div className='flex flex-col bg-white max-w-screen p-4 md:p-8 rounded-2xl  items-start hover:shadow-2xl min-h-full justify-center space-y-4 md:space-y-6 border-2 hover:scale-102 transition-all ease-out duration-200'>
          <h1 className=" text-xl md:text-2xl  lg:text-3xl font-bold">
            {title}
          </h1>
          <h3 className="font-medium text-sm text-gray-500">{desc}</h3>
          {projects ? (
            <ul className="flex flex-col space-y-2 items-start text-left">
              {projects.map((project, i) => (
                <li key={i} className="font-semibold flex items-center space-x-3 text-gray-800">
                  <HiOutlineChevronDoubleRight className='text-themeColor' /> <span>{`${project[i]}`}</span>
                </li>
              ))}
            </ul>
          ) : img && (
            <div>
              <img src={img} className='rounded-xl' />
            </div>
          )}
        </div>
      </a>
    </Link>

  )
}

export default CourseCard
