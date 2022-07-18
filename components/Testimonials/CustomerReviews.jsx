import React from 'react'
import ReviewCard from '../Cards/ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from "swiper";

const CustomerReviews = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-4 ">
      {/* /// container  */}
      <div>
        <h1 className="font-bold text-4xl p-2 w-full border-black  md:text-6xl">
          What our customers say
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container !py-12"
      >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <SwiperSlide key={i}>
            <ReviewCard
              stars={[1, 2, 3, 4, 5]}
              name="Kiran Vishnu"
              desc="I completed CCNA, CCNP Enterprice , PCNSE training from Networkershome. They are the best training institute for networking courses. I know many students from different background are placed at big companies. Networkershome is achieving this through well trained & experience faculties and very effective placement team."
            />
          </SwiperSlide>
        ))}


      </Swiper>

    </div>
  )
}

export default CustomerReviews
