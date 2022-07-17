import { Drawer, IconButton, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React, { useState } from 'react'
import { navData } from '../../utils/dummyData'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import SocialMedia from './SocialMedia'



const NavDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [showSubMenu, setShowSubMenu] = useState('')
    return (
        <div className='flex overflow-hidden  lg:hidden'>
            <Drawer
                open={open}
                anchor='left'
                onClose={handleClose}
            >
                <div
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))` }}
                    className="relative overflow-hidden h-screen ">
                    <div
                        className="min-w-[20rem] backdrop-blur-md  flex flex-col h-screen items-stretch">
                        <div
                            onClick={() => setOpen(false)} className={`w-fit ml-auto cursor-pointer flex lg:hidden hover:rotate-180 font-medium bg-themeYellow  text-white text-lg  p-3 transition-all duration-300 `}>
                            <RiCloseLine />
                        </div>
                        <ul className='flex-col px-6 items-start relative space-y-5  pt-6 md:hidden flex transition-all ease-in-out duration-150'>
                            {navData.map(({ label, link, submenu }, i) => (
                                <>
                                    <motion.li
                                        key={i}
                                        initial={{ x: -200, y: 0 }}
                                        animate={{ x: 0, y: 0 }}
                                        transition={{
                                            duration: "0.8",
                                            delay: `0.${i + 1}`,
                                            type: 'tween'
                                        }}
                                        className='flex  py-2 font-semibold z-20 justify-between items-center space-x-3'>
                                        <Link href={link}>

                                            <a className='relative text-lg link different w-fit '>
                                                {label}
                                            </a>

                                        </Link>
                                        {submenu &&
                                            <div onClick={() => setShowSubMenu(showSubMenu === label ? '' : label)} className="ml-auto transition-all duration-500 hover:text-themeYellow cursor-pointer">
                                                <HiOutlineChevronDoubleRight className={`${showSubMenu === label ? 'rotate-90' : ''}`} />
                                            </div>
                                        }
                                    </motion.li>
                                    {submenu &&
                                        <motion.div  initial={{ x: 200, y: -200 }}
                                        animate={{ x: 0, y: 0 }}
                                        transition={{
                                            duration: "1.2",
                                            delay: `2`,
                                            type: 'tween'
                                        }}
                                        className={`pb-2 h-fit mt-2 ${showSubMenu === label ? ' opacity-100 flex flex-col' : 'opacity-0 hidden'} transition-all duration-500 px-4 z-10  space-y-4 `}>
                                            {submenu.map(({ link, label }, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ x: 200, y: -200 }}
                                                    animate={{ x: 0, y: 0 }}
                                                    transition={{
                                                        duration: "1.2",
                                                        delay: `2`,
                                                        type: 'tween'
                                                    }}
                                                    className='flex justify-between border-b-2 font-medium py-1 border-blue-700'>
                                                    <Link href={link}>
                                                        <a className='text-sm relative link-effect w-fit '>
                                                            {label}
                                                        </a>
                                                    </Link>

                                                </motion.li>
                                            ))}
                                        </motion.div>
                                    }
                                </>
                            ))}


                        </ul>
                    </div >
                    
                    <div className="absolute bottom-6 left-0">
                        <SocialMedia />

                    </div>

                </div >
            </Drawer >
        </div >
    )
}

export default NavDrawer