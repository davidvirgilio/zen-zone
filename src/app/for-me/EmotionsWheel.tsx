import Image from "next/image"
import { use, useState } from "react"
import Link from "next/link"
import style from './ForMe.module.css'
import emotions from '@/content/emotions.json'


function Face({emotion, width, height, onSelect}:{emotion: string, width: number, height: number, onSelect: (emotion:string) => void}){
  
  const sendEmotion = ()=>{
    onSelect(emotion);
  }

    return(
      <button onClick={sendEmotion} className={`button-face mx-auto w-full ${style.face}`}>
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
  
  function SelectedEmotion({exist, emotion, close, sendClose}:{exist: boolean, emotion : string, close : boolean, sendClose: (close: boolean)=> void}){
    const emotionData = emotions.find(({name})=> name === emotion);

    function handleClose(){
      sendClose(true);
    }


    if(exist && emotionData && !close){
      return(
        <div className={style.overlay}>
        <section className={`p-8 sm:mx-auto rounded-3xl mx-8`} style={emotionData.style}>
            <div className="flex justify-between">
              <h2 className="capitalize">{emotion}</h2>
              <button className="px-4" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.52513 29.5251C0.158291 30.892 0.158291 33.108 1.52513 34.4749C2.89196 35.8417 5.10804 35.8417 6.47487 34.4749L18 22.9498L29.5251 34.4749C30.892 35.8417 33.1081 35.8417 34.4749 34.4749C35.8417 33.1081 35.8417 30.892 34.4749 29.5252L22.9497 18L34.4749 6.47487C35.8417 5.10804 35.8417 2.89196 34.4749 1.52513C33.108 0.158291 30.892 0.158293 29.5251 1.52513L18 13.0503L6.47489 1.52517C5.10806 0.158331 2.89198 0.158331 1.52515 1.52517C0.158312 2.892 0.158312 5.10808 1.52515 6.47491L13.0502 18L1.52513 29.5251Z" fill="#6169BC"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-8 mb-8">
              <Image className="w-24 h-auto mx-auto" alt={emotion + " emoji"} src={"/graphics/emotion-" + emotion + ".svg"} width={258} height={258}/>
              <p className="max-w-md w-4/5 lg:max-w-5xl">{emotionData.summary}</p>
            </div>
            <Link href={"/emotions/" + emotion} className="block w-full text-right hover:underline">Explore more</Link>
            </section>
        </div>
      )
    }else{
      return null;  
    }
  }
  
  export function EmotionsWheel(){
    const [selectedEmotion, setSelectedEmotion] = useState('');
    const [close, setClose] = useState(false);
    
    const handleEmotion = (emotion: string)=>{
      setSelectedEmotion(emotion);
      setClose(false);
    }
    const handleClose = () => {
      setClose(true);
    }


    return (
      <div>
        <Emotions sendToParent={handleEmotion}/>
        <SelectedEmotion exist={ selectedEmotion ? true : false} emotion={selectedEmotion} sendClose={handleClose} close={close}/>
      </div>
    )
  }