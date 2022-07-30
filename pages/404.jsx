import Link from 'next/link'
import React from 'react'
import Button from '../components/common/Button'
import Layout from '../components/Layout'

const Error = () => {
    return (
        <Layout>
            <div className="min-h-screen flex items-start justify-center">
                <div className="flex flex-col">
                    <img src="/assets/images/404.webp" alt="" className="w-full h-full" />
                    <h1 className='text-4xl text-center text-themeColor font-bold md:text-6xl'>
                        Page Not Found
                    </h1>
                    <p className="text-base lg:text-lg my-6 text-center">The page you are looking for {`doesn't`} exist or has been moved</p>
                    <div className="mx-auto max-w-[12rem]">
                        <Link href='/'>
                            <a>
                                <Button text={'Back to Home'} />
                            </a>

                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Error