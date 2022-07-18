import React from 'react'
import { teamExperts } from '../../utils/dummyData'
import TeamExpert from '../Cards/TeamExpert'

const TeamExperts = () => {
  return (
   <div className='w-full text-white p-5 space-y-10'  
   style={{
    background:
      'linear-gradient(90deg, rgba(27,90,159,1) 32%, rgba(42,142,143,1) 73%, rgba(0,173,208,1) 100%)',
  }}
   >

<div className='flex flex-col space-y-2 mt-10 text-center'>
  <h1 className='text-3xl md:text-5xl font-bold text-white'>Meeet our team of expert instructors</h1>
  <h4 className='text-sm text-white md:text-lg'>India &apos s most experienced Team of Engineers and instructors. Our instructors are our reputation</h4>
</div>

{/* team exports  */}
<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 '>
{teamExperts.map((expert,i)=>(
  <div className='flex flex-col items-center space-y-3'
  data-aos="zoom-out"
  data-aos-delay={`${i *2}00`}
  data-aos-duration="800"
  key={i}
  
  >
  <TeamExpert img={expert.image}  />
  <h2 className='font-bold'> {expert.name} </h2>
  <h3>{expert.role}</h3>
  </div>
))}
</div>


   </div>
  )
}

export default TeamExperts