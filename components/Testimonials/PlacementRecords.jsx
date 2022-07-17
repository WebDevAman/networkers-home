import React from 'react'

const PlacementRecords = () => {
  return (
    <div className="flex flex-col items-center space-y-3 justify-center py-3">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-3xl md:text-4xl  lg:text-7xl font-bold text-black">
          Unbeatable Placement Record
        </h1>
        <h3 className="text-gray-600 font-medium">
          Over 200+ recruiting companies from all over India and UAE
        </h3>
      </div>
      <div className='space-y-4 flex flex-col items-center px-10 max-w-screen'>
        <div className='w-full hidden lg:flex    items-center justify-center'>
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/xylvwL826HE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=' lg:hidden   md:flex hidden  items-center justify-center'>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/xylvwL826HE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=' md:hidden   sm:flex hidden items-center justify-center'>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/xylvwL826HE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=' sm:hidden   xs:flex items-center justify-center'>
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/xylvwL826HE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='pt-6 flex flex-col lg:flex-row gap-5 items-center  '>
          <div className='hidden md:flex'>

        <iframe width="400" height="315" src="https://www.youtube.com/embed/xylvwL826HE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='flex md:hidden'>

        <iframe width="300" height="315" src="https://www.youtube.com/embed/xylvwL826HE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className='hidden md:flex'>

        <iframe width="400" height="315" src="https://www.youtube.com/embed/xylvwL826HE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='flex md:hidden'>

        <iframe width="300" height="315" src="https://www.youtube.com/embed/xylvwL826HE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementRecords
