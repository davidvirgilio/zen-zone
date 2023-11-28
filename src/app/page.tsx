'use client'
import {TextSection} from '@/components/components'
import VideoCarousel from '@/components/Carousel'
import style from '@/app/ui/styles/videos.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
      <h2 className='text-center'>What statement better describes you?</h2>
      <div className='flex py-10 gap-4 md:gap-12 justify-center'>
        <HomeButton text= {'For me'} page={'for-me'} image={'/graphics/icon-mind.svg'}/>
      <HomeButton text= {'For a friend'} page={'for-a-friend'}  image={'/graphics/icon-hands.svg'}/>
        <HomeButton text= {'Get Help Now'} page={'get-help'} image={'/graphics/icon-heart.svg'}/>
      </div>
      <p className='text-center mx-auto md:w-4/5'>No matter what you&apos;re going through, there are ways to take care of yourself and those close to you.</p>
    </section>
  )
}


export default function Home() {

  return (
      <main>
        <div className={style.video}>
          <iframe className={style.intro} src="https://player.vimeo.com/video/888058949?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" width="100%" height="max-content" frame-order="0" allow="autoplay; fullscreen; picture-in-picture" allow-fullscreen="true"></iframe>
        </div>
        {/* <IntroVideo /> */}
        <TextSection
          title = {"Mental Health Matters at SAIT"}
          text = {"As SAIT’s students, we recognize the importance of mental health and are committed to fostering a supportive community. This website serves as a comprehensive resource hub, offering vital information, helpful resources, and a compassionate community for everyone navigating the complexities of mental health."}
        />
        <HomeButtons />
        <section className='text-center p-10 lg:px-24 lg:py-28 flex flex-col gap-4'>
        <figure>
          <blockquote>
            <p className='font-bold'>&quot;There is no health without mental health. &quot; </p>
          </blockquote>
          <figcaption>(World Health Organization)</figcaption>
        </figure>
        <figure>
          <blockquote>
            <p>Just like everyone has physical health, everyone also has mental health.
            &quot;Mental health&quot; and &quot;mental illness&quot; are sometimes used interchangeably, 
but they have different meanings.</p>
          </blockquote>
          <figcaption>Canadian Society for Medical Laboratory Science on <cite><Link className='external-link' href={"https://mentalhealth.csmls.org/i-am-an-individual/"}>I am and individual </Link></cite></figcaption>
        </figure>
        <Image className='mx-auto my-4' alt='Mental health illness matrix.' src={"/graphics/infographic-home.png"} width={850} height={621} />
        </section>
        <section className='py-8'>
          <h2 className='px-8 pb-8'> What&apos;s SAIT doing to improve mental health?</h2>
          <VideoCarousel />
        </section>
      </main>
  )
}
