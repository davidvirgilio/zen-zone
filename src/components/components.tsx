import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import YouTube from 'react-youtube'



type VideoProps = {
  name: string,
}

function IntroVideo(){
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
      color: '#000000',
      controls: 1,
      showInfo: 0,

    }
  }
  return(
    <YouTube
      videoId = "BpzVvUGfJeA"
      opts={opts}
    />
  )
}


function Video({name}: VideoProps){
    return (
      <video controls>
        <source src={"/video/" + name + ".mp4"} type='video/mp4'/>  
      </video>
    )
}

function TextSection({ title , text }:{title:string, text: string}){
    return(
      <section className='p-10'>
        <h1 className='mb-8'>{ title }</h1>
        <p>{ text }</p>
      </section>
    )}

function HomeButton({text, page, image}:{text:string, page: string, image: string}){
    return(
      <Link className='rounded-full flex flex-col justify-center gap-1 bg-zen text-white w-36 h-36 text-center px-4 py-4' href={page}>
        <Image className='graphic-button hidden sm:block' alt='icon' src={image} width={116} height={140} />
        <p>{text}</p>
      </Link>
    )
}





export {Video, IntroVideo, TextSection, HomeButton} 