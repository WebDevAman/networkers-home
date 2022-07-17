import React from 'react'
import Button from '../Buttons'
import DummyBtn from '../DummyBtn'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <motion.div  className='px-10 lg:px-24 z-10 py-10 flex flex-col items-center justify-center space-y-5'>

<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}}  className='text-black tracking-wider text-xl md:text-4xl lg:text-6xl font-semibold animate-charcter'>CCIE, Cloud and Cyber  </motion.h1>
<motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:1}} className='text-black tracking-wider text-xl md:text-4xl lg:text-6xl font-semibold animate-charcter'>Security Programs</motion.h1>
<motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6,duration:1.2}} className='text-gray-700 text-sm lg:text-lg font-medium text-center'>Lifetime access to Videos. CCIE Certified instructors. 100% Placement programs</motion.h2>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8,duration:1.5}} className='text-black text-md'>100% Placement programs</motion.p>
{/* <Button text={'Join Now'} styles={'bg-black text-white py-4 px-20'} /> */}
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1,duration:1.7}} >

<DummyBtn text={'Join Now'} />
</motion.div>

    </motion.div>
  )
}

export default Banner