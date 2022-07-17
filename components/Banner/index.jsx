import React from 'react'
import Button from '../Buttons'
import DummyBtn from '../DummyBtn'

const Banner = () => {
  return (
    <div className='px-10 lg:px-24 z-10 py-10 flex flex-col items-center justify-center space-y-5'>

<h1 className='text-black tracking-wider text-xl md:text-4xl lg:text-6xl font-semibold animate-charcter'>CCIE, Cloud and Cyber  </h1>
<h1 className='text-black tracking-wider text-xl md:text-4xl lg:text-6xl font-semibold animate-charcter'>Security Programs</h1>
<h2 className='text-gray-700 text-sm lg:text-lg font-medium text-center'>Lifetime access to Videos. CCIE Certified instructors. 100% Placement programs</h2>
<p className='text-black text-md'>100% Placement programs</p>
{/* <Button text={'Join Now'} styles={'bg-black text-white py-4 px-20'} /> */}
<DummyBtn text={'Join Now'} />

    </div>
  )
}

export default Banner