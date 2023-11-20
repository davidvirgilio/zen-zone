'use client'

import { Carousel } from 'flowbite-react';
import { Video } from './components';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const carouselTheme: CustomFlowbiteTheme = {

}


export default function VideoCarousel() {
    return (
      <Flowbite theme={{theme: carouselTheme}} className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
         <Video name={'interview1'}></Video>
          <Video name={'interview2'}></Video>
          <Video name={'interview3'}></Video>
        </Carousel>
      </Flowbite>
    );
  }