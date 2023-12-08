import React from 'react'
import YouTube from 'react-youtube'



type VideoProps = {
  name: string,
}

function relatedVideo(id:string){
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
      videoId = {id}
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

function TextSection({ title , text, textTwo="" }:{title:string, text: string, textTwo: string}){
    return(
      <section className='p-10 lg:flex gap-32 lg:px-24 lg:py-28 max-w-screen-2xl mx-auto'>
        <h1 className='mb-8'>{ title }</h1>
        <p className='w-full mb-4'>{ text }</p>
        <p className='w-full font-bold'>{ textTwo }</p>
      </section>
    )}







export {Video, TextSection, relatedVideo} 