import React from 'react'
import { courseArticles } from '../../utils/dummyData'
import ArticlesCard from '../Cards/ArticlesCard'
import Button from '../common/Button'

const ArticlesAndCourses = () => {
  return (
    <div className='flex flex-col container '>

<div className='flex flex-col lg:flex-row justify-between gap-7'>

<div className='flex flex-col '>
<h1 className='text-4xl font-bold'>Discover our latest articles and insights.</h1>
<div className="h-1 bg-themeColor w-[8rem]"></div>
</div>


<div className='max-w-[200px]'>

<Button text='Get Started' />
</div>

</div>

{/* wraperr */}
<div className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4'>
    {courseArticles.map(({image,title,type,desc},i)=>(
        <div key={i}
  data-aos="zoom-out"
  data-aos-delay={`${i *2}00`}
  data-aos-duration="800">
<ArticlesCard image={image} title={title} type={type} desc={desc} />
        </div>

    ))}
</div>

    </div>
  )
}

export default ArticlesAndCourses