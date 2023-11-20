'use client'
import { Video, TextSection, HomeButton } from '@/components/components'
import VideoCarousel from '@/components/Carousel'

function HomeButtons(){
  return(
    <section className='p-8 bg-light-green'>
      <h2 className='text-center'>What statement better describes you?</h2>
      <div className='flex py-10 gap-4 md:gap-12 justify-center'>
        <HomeButton text= {'For me'} page={'for-me'} image={'/graphics/icon-mind.svg'}/>
      <HomeButton text= {'For a friend'} page={'for-a-friend'}  image={'/graphics/icon-hands.svg'}/>
        <HomeButton text= {'Get Help Now'} page={'get-help'} image={'/graphics/icon-heart.svg'}/>
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
          text = {"As SAIT’s students, we recognize the importance of mental health and are committed to fostering a supportive community. This website serves as a comprehensive resource hub, offering vital information, helpful resources, and a compassionate community for everyone navigating the complexities of mental health."}
        />
        <HomeButtons />
        <section className='py-8'>
          <h2 className='px-8 pb-8'> What’s SAIT doing to improve mental health?</h2>
          <VideoCarousel />
        </section>
      </main>
  )
}
