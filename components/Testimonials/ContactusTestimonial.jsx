import React from 'react'
import Contact from '../Forms/Contact'
import tut1 from '../../public/assets/images/tut1.jpeg'
import Image from 'next/image'

const ContactusTestimonial = () => {
  return (
    <div className=" container px-10  mx-auto">
      {/* ## added firstly container here |^|   why?? i tried like max-w-screen didnt work == See firslty let me explain container i made  i thought max-w-screen means screen k sath adjustment karlenga  --- See it is okm for small but full sized site 1920px+ wale screens me accha nhi dikhta so u must make it like a fixed width either 1600px or 80rem 90rem --- Like google or insta or any site u see --- got it? so avoid max-w-screen as max me toh wo screen hi hota he by default we need to configure min width that it 100% and max must be 80 or 90rem oh ok got -- o k so now add container in every section it will also remove issues with aos i added small-container and tried bt kuch ni hua kiun? small-container is for yt section or smaller section jo 80-90 rem me accha nhi dikhta actuazlly let me tell u why form is getting smaller -- bro listen typing is time wste lets cal yes pls == ok ok let me cal - 1 min ok -- */}
      {/* @apply w-full --- width:100%,  max-w-[90rem] --- if screen is any size it has max 90rem ####  mx-auto - centering the div #### px-4 to add a spacing in mobile from x #### overflow-hidden font-poppins text-themeDark !important */}
      <div className="flex flex-col space-y-2 items-center text-center ">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <div className="h-1 bg-themeColor w-[8rem]"></div>
        <p className="text-sm md:text-md lg:text-lg">
          Complete the form below to arrange a personal demonstration
        </p>
      </div>
      <div className="flex mx-auto flex-col lg:flex-row gap-10 mt-10  ">
        <div className="flex-1">
          <Contact />
        </div>
        {/* // whats the prob ? */}

        <div
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="800"
          className="flex flex-col space-y-3 small-container flex-1"
        >
          <Image
            src={tut1}
            className="w-full h-full rounded-xl object-contain"
            alt=""
          />
          <h3>
            “NH is the number one training and placement provider. It has made
            careers of thousands of people in such a less time, Highly
            recommended institute”
          </h3>
          <p className="font-semibold">
            Srikant R — Cisco Systems, Principal Architect
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactusTestimonial
