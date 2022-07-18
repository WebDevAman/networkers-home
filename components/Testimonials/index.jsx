import React from 'react'
import CourseCard from '../Cards/CourseCard'
import people3 from '../../public/assets/images/people3.jpeg'
import { courses } from '../dummyData'

const Testimonials = () => {
  return (
    <div
      className="flex py-12 flex-col items-center justify-center space-y-6"
      style={{
        background:
          'linear-gradient(90deg, rgba(27,90,159,1) 32%, rgba(42,142,143,1) 73%, rgba(0,173,208,1) 100%)',
      }}
    >
      <div className='container'>
        {/* heading  */}
        <div className="flex flex-col spacey-2 items-center justify-center">
          <h1 className="font-bold text-center text-white text-2xl md:text-4xl lg:text-5xl ">
            100% Placement Programs
          </h1>
          <h3 className="font-medium  lg:text-xl mt-3 d text-gray-100">
            Join India & apos Top Technology training Company
          </h3>
        </div>

        {/* cards  */}
        <div className='grid grid-cols-1 small-container lg:grid-cols-2 pt-10 justify-center gap-10 '>
          {courses.map(({ title, desc, projects, img }, i) => (
            projects ? <CourseCard title={title} desc={desc} projects={projects} i={i} />
              : <CourseCard title={title} desc={desc} img={img} i={i} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Testimonials
