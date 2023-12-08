'use client'
import Image from "next/image"
import { EmotionsWheel } from "./EmotionsWheel"
import { FactCards } from "@/app/for-me/FactCards"
import { ResourcesButton } from "@/components/ResourcesButton"
import style from './ForMe.module.css'
import curves from '@/app/ui/styles/curves.module.css'



export default function Page(){
    return(
      <div>
        <EmotionsWheel />

      
        <section className="px-8 pt-8 text-center max-w-5xl mx-auto">
          <h2>Explore the Emotion Wheel and decode your feelings!</h2>
          <div className={`${style.blueBox} text-center bg-zen text-white`}>
            <Image alt="tape" src={"/graphics/tape.svg"} width={184} height={172} />
            <h3 className="uppercase">What are emotions?</h3>
            <p>Zen Zone understands emotions as the psyche’s reactions to events, people, objects or surroundings. Emotions are experienced as strong feelings, usually accompanied by physical and behavioral changes in the person’s body. There are numerous different opinions, theories and studies when it comes to how emotions are defined and how many exist. Our team came across <cite>Robert Plutchik&apos;s theory and Wheel of Emotions</cite>, and found it to be extremely enlightening.</p>
            <Image alt="tape" src={"/graphics/tape.svg"} width={184} height={172} />
          </div>
        </section>
        <section className="px-8 pb-8 text-center max-w-5xl mx-auto">
          <h2>The Wheel of Emotions</h2>
          <div className="flex flex-col gap-8">
            <p>Robert Plutchik, an American professor and psychologist, introduced an evolutionary approach for classification of general emotional responses. He recognized the existence of eight primary emotions:</p>
            <p className="font-bold">joy, trust, fear, surprise, sadness, disgust, anger, and anticipation.</p>
            <p>Additionally, Plutchik developed the Wheel of Emotions, a conceptual tool that illustrates the intricate relationships between the emotions. The emotional states are organized akin to a complementary colour wheel, in pairs of opposites:</p>
            <p>joy - sadness, trust - disgust, fear - anger, surprise - anticipation.</p>
            <p>ZenZone created an interactive replica of the Wheel of Emotions, which you can find at the top of this page.</p>
            <p>We encourage everyone to click or tap on any or all of the eight emotions and explore them further.</p>
          </div>
        </section>

        <section className="px-8 py-8">
          <h2 className="mb-16 text-center">ZEN ZONE Wisdom Corner</h2>
          <FactCards/>
          <ResourcesButton />
        </section>
        <div className={`${curves.curve} ${curves.curveForMe}`}>
          <Image className="mx-auto max-w-lg w-1/2 relative right-3" src="./graphics/illustration-forme.svg" alt="Illustration of a girl with a calm face and plants and flowers growing from her head." width={320} height={424} />
        </div>
      </div>
    )
}
