import React, { useState } from 'react'
import { navData } from '../dummyData'
import { GrMenu } from 'react-icons/gr'
import { FaChevronDown } from 'react-icons/fa'
import Logo from '../common/Logo'
import NavDrawer from './NavDrawer'
import Button from '../common/Button'
import TopBar from './TopBar'
import Link from 'next/link'

const Index = () => {
    const [open, setOpen] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState('')
    return (
        <>
            <div className='py-2 text-white w-full  bg-themeColor'>
                <div className="flex items-center font-semibold space-x-2 w-fit mx-auto">
                    <p>100% Educational Loan available at 0% interest rate.</p>
                    <a href='tel:000000000' className='hover:underline'>Call Us</a>
                </div>
            </div>
            <header
                style={{
                    background: 'linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7))'
                }}
                className='flex z-50 backdrop-blur-md sticky inset-0  py-1 md:py-2 justify-center w-full'>
                <NavDrawer open={open} setOpen={setOpen} />
                <div className="container !overflow-visible flex justify-between">
                    <div className="h-full items-center flex ">
                        <Logo />
                    </div>
                    <ul className='space-x-8 hidden md:flex'>
                        {navData.map(({ label, slug, submenu }, i) => (
                            <li
                                onMouseEnter={() => setShowSubmenu(label)} onMouseLeave={() => setShowSubmenu('')}
                                key={i} className='relative group h-full group flex space-x-3 items-center '>
                                <a href={slug} className={`${submenu ? 'group-hover:text-themeColor' : 'link'} flex  text-base font-medium text-lightBlack`}>
                                    {label}
                                </a>
                                {submenu &&
                                    <FaChevronDown className='group-hover:text-themeColor' />
                                }
                                {submenu && showSubmenu === label &&
                                    <ul
                                        style={{
                                            boxShadow: '0px 1px 28px -15px rgba(0,0,0,0.75)',
                                            background: 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))'
                                        }}
                                        className='absolute  top-[100%] z-20 left-[-2rem] w-[120%] backdrop-blur-lg overflow-hidden  flex flex-col'>
                                        {submenu.map(({ heading, slug, description }, i) => (
                                            <li
                                                key={i}
                                                className='p-4 h-fit bg-white hover:bg-gray-50 cursor-pointer border-b'>
                                                <Link href={slug}>
                                                    <a>
                                                        <h1 className='text-base font-semibold'>{heading}</h1>
                                                        <p className='text-xs md:text-sm'>{description}</p>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ul>
                    <div
                        className="hidden md:flex items-center">
                        <a href='#'>
                            <Button text='Contact Us' />
                        </a>
                    </div>
                    <div
                        className="flex md:hidden items-center ">
                        <div className=' cursor-pointer py-1 px-2'>
                            <GrMenu className='text-2xl' onClick={() => setOpen(true)} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Index