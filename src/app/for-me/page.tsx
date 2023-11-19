'use client'
import { Face } from "@/components/components"
import Link from "next/link"
import { Card } from "flowbite-react"


function Emotions(){
  return(
        <div className="flex grid grid-cols-3 p-8 my-auto gap-4">
          <Face />
          <Face />
          <Face />
          <Face />
          <h1 className="text-center">How Are you feeling today?</h1>
          <Face />
          <Face />
          <Face />
          <Face />
        </div>
  )
}

function SelectedEmotion(){
  return(
    <section className="bg-slate-200 p-8">
        <h2>Selected emotion or feeling:</h2>
        <div className="flex flex-wrap gap-8 mb-8">
          <Face />
          <p className="max-w-md">Short description of the feeling. Lorem ipsum dolor sit amet consectetur. 
    Sed auctor augue nam faucibus proin. Massa vitae tristique sit at lobortis erat. Ac et euismod neque suspendisse vel elit iaculis id. Imperdiet orci mattis nibh convallis vulputate dictumst facilisis.</p>
        </div>
        <Link href={"#"}>Explore more</Link>
        </section>
  )
}
function Fact(){
  return(
    <Card className="max-w-xs fact">
      <span>Fact No. X</span>
    </Card>
  )
}

function Facts(){
  return (
    <section className="p-8">
      <h2>Did you know?</h2>
      <div className="overflow-x-scroll flex gap-8">
        <Fact />
        <Fact />
        <Fact />
        <Fact />
        <Fact />
      </div>
    </section>
  )
}

export default function Page(){
    return(
      <div>
        <Emotions />
        <SelectedEmotion />
        <Facts />
      </div>
    )
}
