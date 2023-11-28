import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import YouTube from 'react-youtube'



type VideoProps = {
  name: string,
}

// function IntroVideo(){
//   const opts = {
//     height: '500',
//     width: '100%',
//     playerVars: {
//       autoplay: 1,
//       color: '#000000',
//       controls: 1,
//       showInfo: 0,

//     }
//   }
//   return(
//     <YouTube
//       videoId = "BpzVvUGfJeA"
//       opts={opts}
//     />
//   )
// }


function Video({name}: VideoProps){
    return (
      <video controls>
        <source src={"/video/" + name + ".mp4"} type='video/mp4'/>  
      </video>
    )
}

function TextSection({ title , text }:{title:string, text: string}){
    return(
      <section className='p-10 lg:flex gap-32 lg:px-24 lg:py-28'>
        <h1 className='mb-8'>{ title }</h1>
        <p className='w-full'>{ text }</p>
      </section>
    )}







export {Video, TextSection} 