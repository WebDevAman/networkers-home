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
    return (
        <Layout>
            <Head>
                <title>Cisco SDWAN Training Online| NetworkersHome</title>
            </Head>
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="w-full col-span-1  flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>Cisco SDWAN Training</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Cisco SDWAN Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            The Implementing Cisco SD-WAN Solutions (ENSDWI) v2.0 course trains you to design, deploy, configure, and manage your Cisco® Software-Defined WAN (SD-WAN) solution in a large-scale live network, including how to migrate from legacy WAN to SD-WAN. You will learn best practices for configuring routing protocols in the data center and the branch, as well as how to implement advanced control, data, and application-aware policies.
                        </p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h1 className='text-xl font-semibold lg:text-2xl mb-4'>Cisco SDWAN - CCNP Module Course prerequiste</h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className='text-base  lg:text-lg'>
                            For CCNP Certification offered by Cisco, there are no prerequisites for both training and certification.
                            Generally, if you are a fresher candidate then make it sure that you begin with R&S( Enterprise now) track after which you may move ahead in the career ladder with some other track.
                        </h1>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNP Enterprise IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            The course is designed for anyone who wants to start working in IT or just wants a better knowledge about networks
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            We assure you best CCNP enterprise Training in Bangalore and all o
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
                        <a className="bg-[#f3f0e3] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg" target='_blank' href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac50145f9eb98c4157b5bd_300-415-ENSDWI.pdf'>Download</a>
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