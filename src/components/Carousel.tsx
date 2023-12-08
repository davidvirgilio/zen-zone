'use client'

import { Carousel } from 'flowbite-react';
import { Video } from './components';
import { Flowbite } from 'flowbite-react';
import style from '@/app/ui/styles/video.module.css'
import Slider from 'react-slick'
import React from 'react';
import { useState } from 'react';





// export default function VideoCarousel() {
//     return (
//       <>
//           <div className={style.frames}>
//             <iframe  title="vimeo-player" src="https://player.vimeo.com/video/891916396?h=56d5701550" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
//           </div>
//       <Flowbite  className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//         <Carousel slide={false}>
//           <div className={style.frames}>
//             <iframe title="vimeo-player" src="https://player.vimeo.com/video/891924296?h=24ea847ce0" width="640" height="360" frameBorder="0"    allowFullScreen></iframe>
//           </div>


//         </Carousel>
//       </Flowbite>
//       </>
//     );
//   }

// VideoCarousel.jsx

const VideoCarousel = () => {
  return (
    <div className={style.carouselContainer}>
      <Carousel slide={false}>
        <div className={style.videoContainer}>
          <iframe
            title="Emma Interview"
            src="https://player.vimeo.com/video/891916396?h=56d5701550"
            width="640"
            height="360"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style.videoContainer}>
          <iframe
            title="Art Interview"
            src="https://player.vimeo.com/video/891924296?h=24ea847ce0"
            width="640"
            height="360"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
