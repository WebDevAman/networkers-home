import React from 'react'
import Layout from '../../components/Layout'
import Testimonials from '../../components/Testimonials'
import { coursePageProgramsData } from '../../components/dummyData'
import CoursesGrid from '../../components/Pages/courses/CoursesGrid'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import { coursePageGridData } from '../../components/dummyData'
import Head from 'next/head'

const index = () => {
    return (
        <Layout>
            <Head>
                <title>All Courses | NetworkersHome</title>
            </Head>
            <CoursesGrid courses={coursePageGridData} />
            <Testimonials courses={coursePageProgramsData} />
            <ContactusTestimonial />
            <ArticlesAndCourses />
        </Layout>
    )
}

export default index