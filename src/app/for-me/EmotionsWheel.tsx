import Image from "next/image"
import { use, useState } from "react"
import Link from "next/link"
import emotions from '@/content/emotions.json'


function Face({emotion, width, height, onSelect}:{emotion: string, width: number, height: number, onSelect: (emotion:string) => void}){
  
  const sendEmotion = ()=>{
    onSelect(emotion);
  }

    return(
      <button onClick={sendEmotion} className='button-face mx-auto w-full'>
        <Image
          src={`/graphics/face-${emotion}.svg`}
          alt={emotion}
          width={width}
          height={height}
          priority
          className={`w-full h-auto relative ${emotion}`}
           />
      </button>
    )
  }


function Emotions({sendToParent}:{sendToParent: (emotion:string)=> void}){
  
  const handleEmotion = (emotion: string)=>{
    sendToParent(emotion);
  }
  
  return(
    <div className="flex grid grid-cols-3 grid-rows-3 items-center max-w-screen-md px-4 py-8 m-auto gap-4">
            <Face emotion={'anticipation'} width={201} height={205} onSelect={handleEmotion}/>
            <Face emotion={'joy'} width={183} height={183} onSelect={handleEmotion}/>
            <Face emotion={'trust'} width={174.39} height={186.44} onSelect={handleEmotion}/>
            <Face emotion={'anger'} width={185} height={201} onSelect={handleEmotion} />
            <h3 className="text-center uppercase">How are you feeling today?</h3>
            <Face emotion={'fear'} width={179} height={179} onSelect={handleEmotion}/>
            <Face emotion={'disgust'} width={189.10} height={195.28} onSelect={handleEmotion}/>
            <Face emotion={'sadness'} width={187} height={191} onSelect={handleEmotion}/>
            <Face emotion={'surprise'} width={197} height={198} onSelect={handleEmotion}/>
          </div>
    )
  }
  
  function SelectedEmotion({exist, emotion}:{exist: boolean, emotion : string}){
    const emotionData = emotions.find(({name})=> name === emotion);

    if(exist && emotionData){
      return(
        <section className="p-8 sm:mx-auto rounded-3xl w-fit mx-8" style={emotionData.style}>
            <h2 className="capitalize">{emotion}</h2>
            <div className="flex flex-wrap gap-8 mb-8">
              <Image className="w-24 h-auto mx-auto" alt={emotion + " emoji"} src={"/graphics/emotion-" + emotion + ".svg"} width={258} height={258}/>
              {/* <div className="rounded-full bg-white w-24 h-24 flex justify-center items-center">{emotion}</div> */}
              <p className="max-w-md">{emotionData.summary}</p>
            </div>
            <Link href={"/emotions/" + emotion} className="block w-full text-right hover:underline">Explore more</Link>
            </section>
      )
    }
  }
  
  export function EmotionsWheel(){
    const [selectedEmotion, setSelectedEmotion] = useState('');
    
    const handleEmotion = (emotion: string)=>{
      setSelectedEmotion(emotion);
    }
    return (
      <div>
        <Emotions sendToParent={handleEmotion}/>
        <SelectedEmotion exist={ selectedEmotion ? true : false} emotion={selectedEmotion} />
      </div>
    )
  }