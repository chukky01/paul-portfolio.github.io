import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/marine.jpg'
import AVTR2 from '../../assets/jonathan p_MOORE.png'
import AVTR3 from '../../assets/dera_PLUA.jpg'
import AVTR4 from '../../assets/leon_PLUA.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Michael Blackson',
    review: "I'm so grateful to Paul for the amazing website he created for me. " +
              "It's exactly what I was looking for, and it's helped me to take my business to the next level. " +
              "Paul is a true professional, and he's incredibly talented. " +
              "I would highly recommend him to anyone looking for a web developer. ", 
  },
  {
    avatar: AVTR2,
    name: 'Jonathan Moore',
    review: 'Paul is a highly skilled developer with a deep understanding of web design and development. ' + 
            'He was able to take my vision for my website ' +
            'and create something that was even better than I had imagined. ',
  },
  {
    avatar: AVTR3,
    name: 'William Redd',
    review: 'I am very happy with the finished product. '+ 
            'My website is beautiful, user-friendly, and effective. ' +
            'I know that it will help me to connect with more clients. ',
  },
  {
    avatar: AVTR4,
    name: 'Beverly Smith',
    review: "Paul's attention to detail is truly remarkable. " +
            "He meticulously crafted each page to reflect the serene and harmonious essence of yoga. " + 
            "His coding skills transformed my ideas into a visually stunning and " +
            "engaging online presence that resonates with my fellow yoga enthusiasts. ",
  },
  
];


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar, name, review}, index) => {
          return (
             <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar}  />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonial