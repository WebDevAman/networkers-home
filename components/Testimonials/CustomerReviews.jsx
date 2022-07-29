import React, { useState } from 'react'
import { reviews } from '../dummyData'
import ReviewCard from '../Cards/ReviewCard'
import SectionTitle from '../Titles/SectionTitle'
import Button from '../common/Button'

const CustomerReviews = () => {
  const sliceBy = Math.ceil(reviews.length / 3)
  const [showFull, setShowFull] = useState(false)
  return (
    <div className="container flex flex-col items-center justify-center py-4 !my-12">
      {/* /// container  */}
      <div>
        <SectionTitle text={'What our customers say'} bordered />
      </div>
      <div
        className={`grid grid-cols-1 relative ${showFull ? 'h-[100%]' : 'h-[800px]'} py-12 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        <div className="flex flex-col space-y-6">
          {reviews.slice(0, sliceBy).map(({ name, rating, message }, i) => (
            <React.Fragment key={i}>
              <ReviewCard
                rating={rating}
                name={name}
                message={message}
              />
            </React.Fragment >

          ))}
        </div>
        <div className="flex flex-col space-y-6">
          {reviews.slice(sliceBy, 2 * sliceBy).map(({ name, rating, message }, i) => (
            <React.Fragment key={i}>
              <ReviewCard
                rating={rating}
                name={name}
                message={message}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col md:hidden lg:flex space-y-6">
          {reviews.slice(2 * sliceBy, 3 * sliceBy).map(({ name, rating, message }, i) => (
            <React.Fragment key={i}>

              <ReviewCard
                rating={rating}
                name={name}
                message={message}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="!hidden md:!grid lg:!hidden !grid-cols-2 !col-span-2 !w-full gap-6">
          {reviews.slice(2 * sliceBy, 3 * sliceBy).map(({ name, rating, message }, i) => (
            <React.Fragment key={i}>

              <ReviewCard
                rating={rating}
                name={name}
                message={message}
              />
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            background: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255) 99%)'
          }}
          className={`w-full absolute h-[20rem] bg-red-500 bottom-[-5rem] flex items-center justify-center`}>
          <div onClick={() => setShowFull(!showFull)}>

            <Button text={showFull ? 'Show less...' : 'Show more...'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomerReviews
