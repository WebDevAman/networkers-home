import React from 'react'
import { frequentQues } from '../../utils/dummyData'
import SimpleAccordion from '../common/Question'
import chatSvg from '../../public/assets/images/question.svg'
import Button from '../common/Button'
import SectionTitle from '../Titles/SectionTitle'
import Link from 'next/link'

const Questions = () => {
  return (
    <div className='container space-y-10'>

      <div className='flex flex-col space-y-3 items-center text-center justify-center'>
        <SectionTitle text={`Frequently Asked Questions`} />
        <p className='font-medium'>This is Where all answers to your questions are</p>
      </div>

      <div className='grid grid-cols-1  lg:grid-cols-2 gap-4 items-center'>

        <div
          data-aos="fade-right"
          data-aos-delay={`200`}
          data-aos-duration="800"
          className='max-w-[40rem] mx-auto w-full'>
          {frequentQues.map(({ ques, ans }, i) => (
            <SimpleAccordion ques={ques} ans={ans} key={i} />
          ))}
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay={`300`}
          data-aos-duration="800"
          className='bg-gray-200 space-y-4 max-w-[40rem] mx-auto w-full  py-6 flex flex-col items-center justify-center'>

          <svg width="219" height="193" viewBox="0 0 219 193" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175.195 92.2578C168.131 79.0479 156.508 68.8551 142.49 63.577C131.497 59.3368 112.91 60.0744 94.7831 63.3283C76.6559 66.5823 60.6366 73.2241 51.9554 85.5354C43.4747 97.6155 42.1294 106.267 41.7848 120.307C41.5574 129.929 46.3571 137.623 51.3572 145.919C54.9111 151.82 60.3863 155.993 67.3161 159.306C67.0102 160.568 66.6264 161.811 66.1667 163.026C62.2735 172.702 56.689 181.607 49.6745 189.326C57.9583 186.7 64.1758 183.973 70.9395 178.56C74.665 175.584 80.3382 171.148 86.7702 165.826C100.136 168.035 117.994 166.1 126.103 164.091C136.611 161.494 145.335 159.283 154.815 154.367C161.969 150.654 172.481 142.134 175.591 135.776C178.962 129.006 180.684 121.533 180.615 113.97C180.546 106.406 178.689 98.9661 175.195 92.2578Z" fill="#6366F1" stroke="#6366F1" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M138.332 116.216L137.489 110.165" stroke="white" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M109.963 119.033L109.197 112.928" stroke="white" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M81.4939 121.917L80.7004 115.65" stroke="white" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.7317 170.439L15.5416 178.073" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.3261 64.9099L8.20068 60.5781" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.655 50.9018L16.6316 45.3643" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M180.465 31.8979L188.724 21.8608" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M203.09 118.23L213.289 114.77" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M205.919 138.362L213.486 139.427" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M76.7872 25.5054C76.6233 21.1823 75.4837 16.9522 73.4536 13.1318" stroke="#333333" strokeWidth="6.22422" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 className='font-bold text-3xl'>Frquently Asked Questions</h2>
          <p className='font-semibold'>This is where all the answers to your questions are</p>

          <Link href='/networkers-home-contact-us'>
            <a >
              <Button text={'Contact Us'} />

            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Questions