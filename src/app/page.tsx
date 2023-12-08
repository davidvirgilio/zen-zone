'use client'
import {TextSection} from '@/components/components'
import VideoCarousel from '@/components/Carousel'
import style from '@/app/ui/styles/home.module.css'
import curves from '@/app/ui/styles/curves.module.css'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useRef} from 'react'
import { Video } from '@/components/components'

function HomeButton({text, page, image}:{text:string, page: string, image: string}){
  return(
    <Link className='graphic-button rounded-full flex flex-col justify-center gap-1 lg:gap-4  bg-zen text-white w-36 h-36 text-center px-4 py-4' href={page}>
      <Image className=' hidden sm:block mx-auto' alt='icon' src={image} width={116} height={140} />
      <p>{text}</p>
    </Link>
  )
}

function HomeButtons(){
  return(
    <section className='p-8 bg-light-green'>
      <h2 className='text-center'>Zen Zone is here to provide support</h2>
      <div className='flex py-10 gap-4 md:gap-12 justify-center'>
        <HomeButton text= {'For me'} page={'for-me'} image={'/graphics/icon-mind.svg'}/>
      <HomeButton text= {'For a friend'} page={'for-a-friend'}  image={'/graphics/icon-hands.svg'}/>
        <HomeButton text= {'During emergency'} page={'get-help'} image={'/graphics/icon-heart.svg'}/>
      </div>
      <p className='text-center mx-auto md:w-4/5'>No matter what you&apos;re going through, there are ways to take care of yourself and those close to you.</p>
    </section>
  )
}


export default function Home() {
  const [play, setPlay] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)


  function playVideo(){
    if(videoRef.current){
      videoRef.current.play();
      setPlay(false)
    }
  }

  return (
      <main>
        <div className={style.video}>
          {play && 
            <div className={style.overlay}>
            <span>Welcome to Zen Zone</span>
            <button onClick={playVideo}><Image alt='Play video' src={'/graphics/play-white.svg'} width={100} height={100} /></button>
          </div>
          }
          <video ref={videoRef} controls poster="/video/thumbnail.jpg">
        <source  src={"/video/intro.mp4"} type='video/mp4'/>  
      </video>
        </div>
        <section className='p-10 lg:flex gap-32 lg:px-24 lg:py-28 max-w-screen-2xl mx-auto'>
          <h1 className='mb-8'>Mental Health Matters at SAIT</h1>
          <div>
            <p className='w-full mb-4'>Mental health - a vital part of every human that is often overlooked. If you or someone you know are facing the challenges of mental health upkeep, ZenZone is here to guide and assist through it all.</p>
            <p className='w-full font-bold'>In event of emergency or crisis, please call 911 or Alberta Mental Health Help Line at <a href='tel:+18773032642'>1 (877) 303-2642</a></p>
          </div>
         </section> 
          <h2 className='p-10 text-center text-3xl'>Welcome Yo Zen Zone</h2>
        <HomeButtons />
        <section className='text-center p-10 lg:px-24 lg:py-28 flex flex-col gap-4'>
        <h2>Health vs. Illness</h2>
        <div>
          <p className='mb-8'>When people discuss mental health, the words <em>“health”</em> and <em>“illness”</em> are used interchangeably, since there is a connection: an illness can alter your health.</p>
          <p className='mb-8'>However, there is a drastic distinction between these two concepts. <em>A mental illness is a medical condition, while mental health encompasses overall wellness</em> of the person&apos;s mind and incorporeal being. </p>
          <p>Alas, in the majority of conversations around mental wellbeing the participants associate mental health with illnesses, creating negative stigmas around both.</p>
        </div>
        <Image className='mx-auto my-4' alt='Mental health illness matrix.' src={"/graphics/infographic-home.png"} width={923} height={519} />
        </section>
        <section className='py-8 mb-20'>
          <h2 className='px-8 pb-8 text-center'> What&apos;s SAIT doing to improve mental health?</h2>
          <VideoCarousel />
        </section>
        <div className={`${curves.curveHome} ${curves.curve}`}>
          <Image className="mx-auto max-w-sm w-1/2 relative right-3" src="./graphics/illustration-home.svg" alt="Illustration of a girl with a calm face and plants and flowers growing from her head." width={320} height={424} />
        </div>
      </main>
  )
}
