import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'

const TopBar = () => {
    return (
        <div className='py-2 text-white w-full  bg-themeColor'>
            <div className="flex items-center font-semibold space-x-2 w-fit mx-auto">
                <p>100% Educational Loan available at 0% interest rate.</p>
                <a href='tel:000000000' className='hover:underline'>Call Us</a>
            </div>
        </div>
    )
}

export default TopBar