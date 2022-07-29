import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import Head from 'next/head'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import Link from 'next/link'
import TeamExperts from '../../components/Testimonials/TeamExperts'

const descList = [
    'Network fundamentals',
    'Network access',
    'IP connectivity',
    'IP services',
    'Security fundamentals',
    'Automation and programmability',
]

const index = () => {
    return (
        <Layout>
            <Head>
                <title>CCNA Course in Bangalore, India. | NetworkersHome</title>
            </Head>
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>CCNA Course 200-301</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCNA Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            CCNA Course provides students with the skills and knowledge to install, configure, maintain, operate and troubleshoot medium sized networks. Upon completing the course, you will receive a certificate of completion, ensuring you have the skills needed to become a CCNA and start your career in IT networking! We offer CCNA course in online and classroom format. Programs comes with lifetime video library access as well as free exam prep software. The market for IT professionals is booming, and the demand for Cisco Certified Networking Professionals is especially high.
                        </p>
                    </div>
                    <h1 className='text-2xl lg:text-4xl font-extrabold mb-4'>Topics Covered</h1>

                    <div className="flex flex-col space-y-1">
                        {descList.slice(0, 6).map(item => (
                            <li className='text-lg lg:text-xl flex-1  font-semibold' key={item}>{item}</li>
                        ))}
                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h1 className='text-xl lg:text-2xl font-extrabold mb-4'>CCNA Course prerequiste</h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-base  lg:text-lg'>
                            For CCNA Certification offered by Cisco, there are no prerequisites for both training and certification. <br />
                            Generally, if you are a fresher candidate then make it sure that you begin with R&S( Enterprise now) track after which you may move ahead in career ladder with some other track.
                        </h1>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNA IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            The course is designed for anyone who wants to start working in IT or just wants a better knowledge about networks
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            We assure you best CCNA Training in bangalore and all over the world in online and classroom format
                        </li>
                    </div>
                    <div className="flex flex-col mt-4 space-y-2">
                        <a target='_blank' rel='noreferrer' href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac3c289988300eb63458e1_CCNA.pdf' className="rounded-lg py-3 px-6 text-center w-full hover:opacity-80 text-lg bg-[#EED477]">Download Course Syllabus</a>
                        <a target='_blank' rel='noreferrer' href='https://www.cisco.com/c/dam/en_us/training-events/training-services/courses/implementing-and-administering-cisco-solutions-ccna.pdf' className="rounded-full border border-gray-300 bg-[#fafafa] py-3 px-6 text-center w-full hover:bg-[#efefef] text-lg">Cisco Official Course info</a>
                    </div>
                </div>
            </div>
            <img src="/assets/images/course-banner.jpg" alt="" className="w-full h-full" />
            <CourseFeatures noBG={true} />
            <div className="bg-themeColor py-12 lg:py-20">
                <div className="container flex flex-col md:flex-row text-center md:text-left  items-center justify-between">
                    <div className="flex flex-col space-y-4">
                        <h1 className='text-2xl lg:text-4xl font-extrabold text-white'>Download Complete Syllabus</h1>
                        <p className="text-white text-base lg:text-lg">
                            Checkout full syllabus for relevant courses
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <a href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac3c289988300eb63458e1_CCNA.pdf' className="bg-[#fff] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Download</a>
                        <Link href='/networkers-home-contact-us'>
                            <a
                                className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg"
                            >
                                Contact Us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <PlacementRecords />
            <CustomerReviews />
            <TeamExperts />
            <ContactusTestimonial />
            <ArticlesAndCourses />
        </Layout>
    )
}

export default index