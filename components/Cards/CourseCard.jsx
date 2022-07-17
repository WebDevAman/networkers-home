import React from 'react'
import Image from 'next/image'

const CourseCard = ({ title, desc, projects,img ,i}) => {
  return (
    <div
    data-aos="zoom-out"
    data-aos-delay={`${i*3}00`}
                data-aos-duration="800"
    className={``}>
    <div className='flex flex-col  bg-white xs:w-[300px] sm:w-[350px]  md:w-[450px] max-w-screen px-4 py-4 rounded-2xl  items-start hover:shadow-2xl justify-center space-y-5 border-2 hover:scale-110 transition-all ease-out duration-200'>

      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold border-b-[1px] border-gray-600 p-3">
        {title}
      </h1>
      <h3 className="font-medium text-sm text-gray-500">{desc}</h3>
      {projects ? (
      <div className="flex flex-col space-y-2 items-start text-left">
        {projects.map((project,i) => (
          <li className="font-semibold text-gray-800">{`${project[i]}`}</li>
        ))}
      </div>

      ): img && (
        <div>

<img src={img} objectFit='cover' />
        </div>
      )}
    </div>
    </div>

  )
}

export default CourseCard
