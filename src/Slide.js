import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
import SpeakerData from './SpeakerData';
import Speaker from './Speaker';
// Import Swiper styles
import 'swiper/css';
import { Speackers } from './Creativestyl';
const Slide = () => {
  return (
    
    <Swiper
    autoplay={{
        delay:2500,
        disableOnInteraction:false,
    }}
    loop={true}
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={4}
    
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    

  {SpeakerData.map(item=>{
    return(<SwiperSlide key={item.id}>
      <Speaker name={item.name} img={item.img} job={item.job} key={item.id} />
   
      </SwiperSlide>
      )
    })}
  

    
  </Swiper>
  )
}

export default Slide
