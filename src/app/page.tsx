'use client'
import { Video, TextSection, HomeButton } from '@/components/components'
import VideoCarousel from '@/components/Carousel'

function HomeButtons(){
  return(
    <section className='p-8 bg-slate-200'>
      <h2>What statement better describes you?</h2>
      <div className='flex py-10 gap-4'>
        <HomeButton text= {'For me'} page={'for-me'}/>
        <HomeButton text= {'For a friend'} page={'for-a-friend'} />
        <HomeButton text= {'Get Help Now'} page={'get-help'} />
      </div>
    </section>
  )
}

export default function Home() {

  return (
      <main>
        <Video name= {'intro'} />
        <TextSection
          title = {"Mental Health Matters at SAIT"}
          text = {"Lorem ipsum dolor sit amet consectetur. Sed auctor augue nam faucibus proin. Massa vitae tristique sit at lobortis erat. Ac et euismod neque suspendisse vel elit iaculis id. Imperdiet orci mattis nibh convallis vulputate dictumst facilisis."}
        />
        <HomeButtons />
        <section className='py-8'>
          <h2 className='px-8 pb-8'> What’s SAIT doing to improve mental health?</h2>
          <VideoCarousel />
        </section>
      </main>
  )
}
