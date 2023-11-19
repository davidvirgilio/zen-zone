import Link from 'next/link'
import Image from 'next/image'

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
        <h1 className='text-xl mb-8'>{ title }</h1>
        <p>{ text }</p>
      </section>
    )}

function HomeButton({text, page}:{text:string, page: string}){
    return(
      <button className='rounded-full bg-white w-24 h-24 '
      type='button'><Link href={page}>{text}</Link></button>
    )
}



  function Face(){
    return(
      <button  className='button-face mx-auto w-full'>
        <Image
          src="/graphics/circle.svg"
          alt="Face"
          width={60}
          height={60}
          priority
          className='w-full'
           />
      </button>
    )
  }


export {Video, TextSection, HomeButton, Face} 