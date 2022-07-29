import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import Link from 'next/link'


const index = () => {
    const descList = [
        'CCNP Enterprise: Core Networking(ENCOR)',
        'CCNP Enterprise: Advanced Routing(ENARSI)',

    ]
    return (
        <Layout>
            <Head>
                <title>CCNP Enterprise Trainining Online and Classroom Bangalore | NetworkersHome</title>
            </Head>
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="w-full col-span-1 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>CCNP Enterprise infrastructure</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCNP Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            CCNP Enterprise infrastructure training program now covers some of the most advanced technologies like Cisco DNA Center, Cisco SDWAN, Cisco Encore and ENRASI Module. CCNP Pod now requires a cost of around 50 Lakhs or 100K USD due to high cost of equipment like Cisco DNA Center with real switches. This cannot be practiced on virtual tools like EVE-NG Etc. We are proud to be first and largest institute in the world to have all licensed equipment available to teach this course in both online and classroom mode. Modules covered
                        </p>
                        <div className="flex pt-6 flex-col space-y-1">
                            {descList.map(item => (
                                <li className='text-lg lg:text-xl flex-1  font-semibold' key={item}>{item}</li>
                            ))}
                        </div>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            <a href='https://www.cisco.com/c/en/us/training-events/training-certifications/training/training-services/courses/implementing-cisco-sd-wan-solutions-ensdwi.html' >Implementing Cisco SD - WAN Solutions(ENSDWI)</a>
                        </li>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h1 className='text-xl font-semibold lg:text-2xl mb-4'>CCNP Enterprise infra Course prerequisite</h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-base  lg:text-lg'>
                            For CCNP Certification offered by Cisco, there are no prerequisites for both training and certification.
                        </h1>
                        <h1 className='text-base  lg:text-lg'>
                            Generally, if you are a fresher candidate then make it sure that you begin with R&S( Enterprise now) track after which you may move ahead in the career ladder with some other track.
                        </h1>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNP Enterprise IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            The course is designed for anyone who wants to start working in IT or just wants a better knowledge about networks
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            We assure you best CCNP enterprise Training in Bangalore and all over the world in online and classroom format.
                        </li>
                    </div>
                </div>
            </div>
            <div className="bg-themeColor py-12 lg:py-20">
                <div className="container flex flex-col md:flex-row text-center md:text-left  items-center justify-between">
                    <div className="flex flex-col space-y-4">
                        <h1 className='text-2xl lg:text-4xl font-extrabold text-white'>Download Complete Syllabus</h1>
                        <p className="text-white text-base lg:text-lg">
                            Checkout full syllabus for relevant courses
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <a className="bg-[#f3f0e3] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg" href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac4ed940f8eb26d6c4702d_CCNP%20Advance.pdf'>Download</a>
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
            <CourseFeatures noBG={true} />
            <PlacementRecords />
            <CustomerReviews />
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout>
    )
}

export default index