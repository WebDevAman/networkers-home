import { Drawer, IconButton } from '@material-ui/core'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { navData } from '../dummyData'
const NavDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className='flex lg:hidden'>
            <Drawer
                open={open}
                anchor='right'
                onClose={handleClose}
            >
                <div className="flex lg:hidden p-3 bg-themeColor hover:bg-lightBlack text-white  ml-auto" onClick={() => { setOpen(false) }}>
                    <MdOutlineClose className='text-2xl' />
                </div>
                <div className="min-w-[20rem] mt-4">
                    <ul className="flex flex-col">
                        {navData.map((route, i) => (
                            <div
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay={`${i + 2}00`}
                                key={i}
                                className='flex flex-col border-b border-gray-200 '>
                                <li className='flex items-center cursor-pointer px-4 hover:pr-2 py-4 '>
                                    <Link href={route.slug}>
                                        <a className='text-base font-ubuntu uppercase hover:text-themeColor  font-semibold text-lightBlack hover:text-violet hover:underline'>
                                            {route.label}
                                        </a>
                                    </Link>
                                </li>
                            </div>
                        ))}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay={`500`}
                            className='flex flex-col border-b border-gray-200 '>
                            <li className='flex items-center cursor-pointer px-4 hover:pr-2 py-4 '>
                                <Link href='#contact'>
                                    <a className='text-base font-ubuntu uppercase hover:text-themeColor  font-semibold text-lightBlack hover:text-violet hover:underline'>
                                        Contact Us
                                    </a>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default NavDrawer