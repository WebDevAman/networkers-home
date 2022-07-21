import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const index = ({ children }) => {
    return (
        <div className='flex flex-col max-w-screen font-lato '>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index