import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type VideoProps = {
  name: string,
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
      <Link className='rounded-full flex flex-col justify-center gap-1 bg-zen text-white w-36 h-36 text-center p-2' href={page}>
        <Image className='graphic-button' alt='icon' src={image} width={116} height={140} />
        {text}
      </Link>
    )
}





export {Video, TextSection, HomeButton} 