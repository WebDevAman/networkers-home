import React from 'react'
import CourseCard from '../Cards/CourseCard'
import SectionTitle from '../Titles/SectionTitle'

const Testimonials = ({ courses }) => {
  return (
    <div
      className="flex py-10 themeBg flex-col items-center justify-center space-y-6"

    >
      <div className='container flex flex-col'>
        {/* heading  */}
        <div className="flex text-center flex-col spacey-2 items-center justify-center">
          <SectionTitle text={'100% Placement Programs'} />
          <h3 className="font-medium lg:text-lg md:text-xl mt-3 d ">
            {`Join India's Top Technology training Company`}
          </h3>
        </div>

        {/* cards  */}
        <div className='grid grid-cols-1 small-container py-8 md:grid-cols-2 justify-center gap-6 lg:gap-10 '>
          {courses.map(({ title, desc, link, projects, img }, i) => (
            projects ? <CourseCard link={link} title={title} desc={desc} projects={projects} i={i} />
              : <CourseCard link={link} title={title} desc={desc} img={img} i={i} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Testimonials
