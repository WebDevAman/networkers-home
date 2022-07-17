import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <a className='w-[15rem] h-[4rem] relative'>
                <Image src='/assets/images/logo.jpeg' alt='image' objectFit='contain' layout='fill' />
            </a>
        </Link>
    )
}

export default Logo