import React from 'react'
import Layout from '../../components/Layout'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'

import Head from 'next/head'
import ContactForm from '../../components/Pages/ContactForm'

const Index = () => {

    return (
        <Layout>
            <Head>
                <title>Contact Us | NetworkersHome</title>
            </Head>
            <ContactForm />
            <ArticlesAndCourses />

        </Layout>
    )
}

export default Index