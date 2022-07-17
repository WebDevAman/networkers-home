import Head from 'next/head'
import "aos/dist/aos.css";
import React from 'react';
import Layout from '../components/Layout';
import Aos from 'aos';
import Hero from '../components/Pages/Home/Hero';

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
      </div>
    </Layout>
  )
}
