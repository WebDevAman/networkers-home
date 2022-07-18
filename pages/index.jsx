import Head from 'next/head'
import "aos/dist/aos.css";
import React from 'react';
import Layout from '../components/Layout';
import Aos from 'aos';
import Hero from '../components/Pages/Home/Hero';
import Testimonials from '../components/Testimonials';
import Placements from '../components/Testimonials/Placements';
import CustomerReviews from '../components/Testimonials/CustomerReviews'
import PlacementRecords from '../components/Testimonials/PlacementRecords';
import CourseFeatures from '../components/Testimonials/CourseFeatures';
import ContactusTestimonial from '../components/Testimonials/ContactusTestimonial';
import TeamExperts from '../components/Testimonials/TeamExperts';
import Questions from '../components/Testimonials/Questions';
import ArticlesAndCourses from '../components/Testimonials/ArticlesAndCourses';

export default function Home() {
  React.useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Layout>
      <Head>
        <title>Networkers Home</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col my-12 space-y-12'>
        <Hero />
        <Testimonials/>
        <div className='max-w-screen space-y-10'>

        <Placements/> 
        <PlacementRecords/>
        <CustomerReviews/>
        <CourseFeatures/>
        <ContactusTestimonial/>
        <TeamExperts/>
        <Questions/>
        <ArticlesAndCourses/>
        </div>
      </div>
    </Layout>
  )
}
