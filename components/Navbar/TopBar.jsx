import React from 'react'
import Link from 'next/link'

const TopBar = () => {
    return (
        <div className='py-2 text-white w-full  bg-themeColor'>
            <div className="flex text-xs md:text-base items-center font-semibold space-x-2 w-fit mx-auto">
                <p>100% Educational Loan available at 0% interest rate.</p>
                <Link href='/networkers-home-contact-us' className='hover:underline'>Call Us</Link>
            </div>
        </div>
    )
}

export default TopBar