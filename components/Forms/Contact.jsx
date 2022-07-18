import React from 'react'

const Contact = () => {
  const imageUrl = '/images/contact.webp'
  const inputFields = [
    {
      label: ' Name',
      type: 'text',
    },
    {
      label: 'Country',
      type: 'text',
    },

    {
      label: 'Email Address',
      type: 'email',
    },
    {
      label: 'Phone Number',
      type: 'number',
    },

    {
      label: 'Type Your Course Name and Query  here',
      type: 'textarea',
    },
  ]
  return (
    <div className="small-container">
      <form className='space-y-5'>
        <div className="flex flex-col gap-6 w-full">
          {inputFields.map(({ type, label },i) => (
            <div key={i} className='border border-gray-500 rounded-md w-full hover:shadow-md hover:border-blue-600 hover:backdrop:blur-sm focus:border-2 transition-all ease-in-out duration-200'>
              {type === 'text' ? (
                <input type="text" placeholder={`Enter your ${label}`} className='w-full outline-none bg-transparent placeholder:text-md placeholder:text-gray-600 p-3' />
              ) : type === 'number'  ? (
                <input type="text" placeholder={`Enter your ${label}`} className='w-full outline-none bg-transparent placeholder:text-md placeholder:text-gray-600 p-3'/>
              ) : (
                type === 'textarea' ? <textarea rows={4} placeholder={`Enter your ${label}`}  className='w-full  outline-none bg-transparent placeholder:text-md placeholder:text-gray-600 p-3'/>
                : type==='email' && <input type="email"  placeholder={`Enter your ${label}`} className='w-full outline-none bg-transparent placeholder:text-md placeholder:text-gray-600 p-3' />
              )}
            </div>
          ))}
        </div>
        <button className='font-bold  p-3 rounded-md text-white bg-blue-600 w-full hover:bg-blue-500 hover:scale-95 transition-all ease-in-out duration-150'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
