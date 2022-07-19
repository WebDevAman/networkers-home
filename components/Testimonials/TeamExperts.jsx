import React from 'react'
import { teamExperts } from '../../utils/dummyData'
import TeamExpert from '../Cards/TeamExpert'
import SectionTitle from '../Titles/SectionTitle'

const TeamExperts = () => {
  return (
    <div className='themeBg py-12 space-y-10'
    >
      <div className='flex flex-col space-y-4 text-center'>
        <SectionTitle text={'Our Expert Instructors'} />
        <h4 className='text-sm md:text-lg max-w-[45rem] mx-auto '>{`India's most experienced Team of Engineers and instructors. Our instructors are our reputation`}</h4>
      </div>

      {/* team exports  */}
      <div className="flex justify-center">
        <div className='grid grid-cols-1 place-content-center sm:grid-cols-2 max-w-[80rem] justify-center gap-10 px-auto md:grid-cols-3 lg:grid-cols-4'>
          {teamExperts.map((expert, i) => (
            <div

              key={i} className='flex  items-center mx-auto flex-col'>

              <div
                data-aos="fade-up"
                className='w-fit'
                data-aos-delay={`${i + 1}00`}
                data-aos-duration="800"
              >
                <TeamExpert expert={expert} />
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default TeamExperts