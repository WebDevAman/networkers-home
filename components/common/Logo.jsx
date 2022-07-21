import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <a className='w-[13rem] h-[3.5rem] md:w-[18rem] md:h-[4.5rem] relative'>
                <Image src='/assets/images/logo.png' alt='image' objectFit='contain' layout='fill' />
            </a>
        </Link>
    )
}

export default Logo