'use client'
import React from "react";
import { Card } from "flowbite-react";
import style from "@/app/ui/styles/Resources.module.css"


const resources = [
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. "
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. "
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. "
    },

]

function ResourceCards(){
    const cards = resources.map((resource, index)=>{
        return (
            <Card key={index} className={style.card}>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
            </Card>
        )
    })

    return(
        <div className="flex gap-8 flex-wrap justify-center">{cards}</div>
    )
}

export default function Page(){
    return(
        <div className="p-16">
            <h1 className="text-center">Resources Catalogue</h1>
            <ResourceCards />
        </div>
    )
}