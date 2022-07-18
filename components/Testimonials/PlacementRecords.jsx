import React from 'react'

const PlacementRecords = () => {
  return (
    <div className="flex flex-col small-container space-y-8 justify-center py-3">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl ">
          Unbeatable Placement Record
        </h1>
        <h3 className="text-gray-600 text-lg">
          Over 200+ recruiting companies from all over India and UAE
        </h3>
      </div>
      <div className='flex flex-col space-y-4 md:space-y-8 px-4 max-w-[60rem] w-full mx-auto'>
        <Video1 />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Video2 />
          <Video3 />
        </div>
      </div>
    </div>
  )
}

const Video1 = () => {
  return (
    <>
      <div className="w-full relative pb-[60%]">
        <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/xylvwL826HE" title="NETWORKERS HOME -100% Placement programs in Cyber security, Networking and Cloud" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}
const Video2 = () => {
  return (
    <>
      <div className="w-full relative pb-[60%]">
        <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/pNm09pvVauM" title="PRANAV from Delhi got placed in Cisco Systems,Bangalore" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}
const Video3 = () => {
  return (
    <>
      <div className="w-full relative pb-[60%]">
        <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/8sFKna-T9XY" title="Vishal got placed in TOP MNC" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}
export default PlacementRecords
