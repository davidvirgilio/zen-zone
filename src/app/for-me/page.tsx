'use client'
import Image from "next/image"
import { EmotionsWheel } from "./EmotionsWheel"
import { FactCards } from "@/app/for-me/FactCards"
import { ResourcesButton } from "@/components/ResourcesButton"
import style from './ForMe.module.css'
import curves from '@/app/ui/styles/curves.module.css'



export default function Page(){
    return(
      <div className="relative">
        <EmotionsWheel />

      
        <section className="px-8 py-8 text-center max-w-5xl mx-auto">
          <h2>Explore the Emotion Wheel and decode your feelings!</h2>
          <div className={`${style.blueBox} text-center bg-zen text-white`}>
            <Image alt="tape" src={"/graphics/tape.svg"} width={184} height={172} />
            <h3 className="uppercase">What are emotions?</h3>
            <figure>
            <blockquote>
              <p>Emotions are basic responses tied to how you feel inside. They&apos;re personal reactions reflecting your mental well-being.</p>
            </blockquote>
            <figcaption><cite><a href="https://thepleasantmind.com/types-of-emotions/"> The Pleasant Mind</a></cite></figcaption>
            </figure> 
            <Image alt="tape" src={"/graphics/tape.svg"} width={184} height={172} />
          </div>
          <div className="flex flex-col gap-8">
            <p>With so many emotions swirling around, sure you ever felt a bit lost in there. Well, ever heard of Robert Plutchik and his Emotion Wheel?</p>
            <p><span className="font-bold">It&apos;s a tool that breaks down emotions into 8 basics:</span><br /> joy, trust, fear, surprise, sadness, anticipation, anger, and disgust.</p>
            <p>Think of it as your feelings GPS, shining a light on emotions and making them way less mysterious and overwhelming.</p>
          </div>
        </section>

        <section className="px-8 py-8">
          <h2 className="mb-16">ZEN ZONE Wisdom Corner</h2>
          <FactCards/>
          <ResourcesButton />
        </section>
        <div className={`${curves.curve} ${curves.curveForMe}`}>
          <Image className="mx-auto max-w-lg w-1/2 relative right-3" src="./graphics/illustration-forme.svg" alt="Illustration of a girl with a calm face and plants and flowers growing from her head." width={320} height={424} />
        </div>
      </div>
    )
}
