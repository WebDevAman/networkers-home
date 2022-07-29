import Link from 'next/link'
import React from 'react'
import Logo from '../common/Logo'
import { socialData } from '../dummyData'
import { BsChevronDoubleRight } from 'react-icons/bs'

const index = () => {

    return (
        <div
            style={{
                boxShadow: '-1px -3px 27px -20px rgba(0,0,0,0.3)'
            }}
            className='w-full shadow-md border-t py-12'>
            <div className="container items-start grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <div className="flex flex-col space-y-6">
                    <div className="h-full items-center flex ">
                        <Logo />
                    </div>
                    <p className='text-sm md:text-base'>CCIE Enterprise Infrastructure Training Institute. Certified CCIE Instructors. NH is Famously Known For CCIE Training Program. International Students. View Our Programs.</p>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-lg md:text-xl lg:text-xl'>Quick Links</h1>
                        <div className='h-1 bg-themeColor w-[4rem]'></div>
                    </div>
                    <ul className='space-y-4'>
                        {['Placement programs', 'Other courses', 'About us', 'Contact us'].map(label => (
                            <li key={label}>
                                <Link href={'#'}><a className='items-center space-x-2 hover:text-themeColor hover:space-x-4 transition-all duration-500 flex '><BsChevronDoubleRight /><span>{label}</span></a></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-lg md:text-xl lg:text-xl'>Social Links</h1>
                        <div className='h-1 bg-themeColor w-[4rem]'></div>
                    </div>
                    <div className="flex space-x-4 items-center">
                        {socialData.map((data, i) => (
                            <div key={i} className='p-4 hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:text-themeColor bg-gray-100 rounded-full '>
                                {data.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index