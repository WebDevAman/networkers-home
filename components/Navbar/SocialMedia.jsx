import { BsInstagram } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const SocialMedia = () => {
    return (
        <div className='grid grid-cols-5 gap-5'>
           
            <div
                className="w-10 instagram flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full">
                <a target='_blank' href='https://www.instagram.com/singshfit/'>
                    <BsInstagram className='text-white text-xl' />
                </a>
            </div>

            <div
                className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-black">
                <a target='_blank' href='https://www.vt.tiktok.com/ZSdomqHqn'>
                    <FaTiktok className='text-white text-xl' />
                </a>
            </div>
            <div
                className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-[#FF0000]">
                <a target='_blank' href='https://www.youtube.com/singhsfit'>
                    <FaYoutube className='text-white text-xl' />
                </a>
            </div>
            <div
                className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-[#3b5998]">
                <a target='_blank' href='https://www.facebook.com/SINGHSFIT/'>
                    <FaFacebookF className='text-white text-xl' />
                </a>
            </div>

            <div
                className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-blue-500">
                <a target='_blank' href='https://www.vt.tiktok.com/ZSdomqHqn'>
                    <GoMail className='text-white text-xl' />
                </a>
            </div>

        </div>
    )
}

export default SocialMedia