'use client'
import Image from "next/image"
import { EmotionsWheel } from "./EmotionsWheel"
import { FactCards } from "@/app/for-me/FactCards"
import { ResourcesButton } from "@/components/ResourcesButton"
import style from './ForMe.module.css'


export default function Page(){
    return(
      <div>
        <EmotionsWheel />
        <section className="px-8 py-8">
          <h2 className="mb-16">Did you know?</h2>
          <FactCards/>
          <ResourcesButton />
        </section>
        <div className={style.curve}>
          <Image className="mx-auto w-1/2 relative right-3" src="./graphics/illustration-forme.svg" alt="Illustration of a girl with a calm face and plants and flowers growing from her head." width={320} height={424} />
        </div>
      </div>
    )
}
