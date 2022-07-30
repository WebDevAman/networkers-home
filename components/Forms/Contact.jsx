import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Button from '../common/Button';

const Contact = () => {
  const imageUrl = '/images/contact.webp'
  const [state, handleSubmit] = useForm("mbjpalad");
  if (state.succeeded) {
    return <div className="h-full flex items-center justify-center relative">
      <div className="p-12 lg:p-20 shadow-2xl rounded-2xl">
        <div className="p-6 border border-green-300 bg-green-100 rounded-2xl">
          <div className="text-green-600 text-lg text-center max-w-[300px]">Thank you! Your submission has been received!</div>
        </div>
      </div>
    </div>;
  }
  return (
    <div className="small-container">
      <form onSubmit={handleSubmit} className='space-y-5'>

        <input
          id="name"
          type="text"
          name="name"
          placeholder='Your Name'
          className='w-full p-3 border text-themeDark border-gray-400 focus:border-themeColor outline-none rounded-lg focus:shadow-md'
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <input
          id="country"
          type="text"
          name="country"
          placeholder='Country'
          className='w-full p-3 border text-themeDark border-gray-400 focus:border-themeColor outline-none rounded-lg focus:shadow-md'
        />
        <ValidationError
          prefix="Country"
          field="country"
          errors={state.errors}
        />
        <input
          id="phone"
          type="number"
          name="phone"
          placeholder='Contact Number'
          className='w-full p-3 border text-themeDark border-gray-400 focus:border-themeColor outline-none rounded-lg focus:shadow-md'
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
        />
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder='Email Address'
          className='w-full p-3 border text-themeDark border-gray-400 focus:border-themeColor outline-none rounded-lg focus:shadow-md'
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />

        <textarea
          placeholder='Enter your Type Your Course Name and Query  here'
          id="message"
          name="message"
          rows='5'
          className='w-full p-3 border border-gray-400 focus:border-themeColor outline-none rounded-lg focus:shadow-md'
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex flex-col space-y-4  border-gray-300">
          <div className="flex space-x-4 items-center">
            <input type="checkbox"
              id='check'
            />
            <label htmlFor='check' className='text-base cursor-pointer'>I am happy to be contacted via phone.</label>
          </div>
          <button disabled={state.submitting} className="w-[12rem]"> <Button text={state.submitting ? 'Just a moment...' : 'Submit'} /></button>
        </div>
      </form>
    </div>
  )
}

export default Contact
