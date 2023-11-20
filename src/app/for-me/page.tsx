'use client'
import Link from "next/link"
import Image from "next/image"
import { EmotionsWheel } from "@/components/EmotionsWheel"
import { FactCards } from "@/components/FactCards"
import { ResourcesButton } from "@/components/ResourcesButton"


export default function Page(){
    return(
      <div>
        <EmotionsWheel />
        <section className="px-8 py-8">
          <h2 className="mb-16">Did you know?</h2>
          <FactCards/>
          <ResourcesButton />
        </section>
          <div className="footer-curve">
            <Image className="mx-auto w-1/2" src="./graphics/illustration-forme.svg" alt="Illustration of a girl with a calm face and plants and flowers growing from her head." width={320} height={424} />
          </div>
      </div>
    )
}
