'use client'
import React from "react";
import { Card } from "flowbite-react";
import style from "./Resources.module.css"
import curves from '@/app/ui/styles/curves.module.css'
import Image from "next/image";



const resources = [
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },
    {
        name: "Distress Centre Calgary",
        description: "In a crisis or need immediate support, contact Distress Centre Calgary. Trained professionals are here to listen and help. ",
        link: "https://www.distresscentrecalgary.ca/",
        email: "example@mail.ca",
        tel: "+1 (403) 266-4357"
    },

]

function ResourceCards(){
    const cards = resources.map((resource, index)=>{
        return (
            <Card key={index} className={`${style.card} `}>
                <h3>{resource.name}</h3>
                <p className="text-left">{resource.description}</p>
                <div className="flex  justify-between py-4 flex-wrap gap-8">
                    <span>24/7 Support</span>
                    <div className="flex items-center gap-6">
                        <a href={"mailto:" + resource.email}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <path d="M14.8993 0H4.09982C2.11452 0 0.5 1.70943 0.5 3.81144V10.5139C0.5 12.6159 2.11452 14.3253 4.09982 14.3253H5.01867V18.0453C5.01867 18.2309 5.06985 18.4124 5.16593 18.5676C5.26201 18.7229 5.39882 18.845 5.55955 18.919C5.55955 18.919 6.07882 19.1887 6.5315 18.7437L11.0277 14.3253H14.9002C16.8855 14.3253 18.5 12.6159 18.5 10.5139V3.81144C18.4986 2.80088 18.1187 1.83216 17.4437 1.11768C16.7688 0.403196 15.8537 0.00126017 14.8993 0ZM13.6429 10.1308H5.35616C5.11747 10.1308 4.88857 10.0304 4.71979 9.85173C4.55102 9.67303 4.4562 9.43067 4.4562 9.17795C4.4562 8.92524 4.55102 8.68287 4.71979 8.50418C4.88857 8.32548 5.11747 8.22509 5.35616 8.22509H13.6429C13.8816 8.22509 14.1105 8.32548 14.2793 8.50418C14.4481 8.68287 14.5429 8.92524 14.5429 9.17795C14.5429 9.43067 14.4481 9.67303 14.2793 9.85173C14.1105 10.0304 13.8816 10.1308 13.6429 10.1308ZM13.6429 6.31937H5.35616C5.11747 6.31937 4.88857 6.21898 4.71979 6.04028C4.55102 5.86159 4.4562 5.61922 4.4562 5.36651C4.4562 5.1138 4.55102 4.87143 4.71979 4.69274C4.88857 4.51404 5.11747 4.41365 5.35616 4.41365H13.6429C13.8816 4.41365 14.1105 4.51404 14.2793 4.69274C14.4481 4.87143 14.5429 5.1138 14.5429 5.36651C14.5429 5.61922 14.4481 5.86159 14.2793 6.04028C14.1105 6.21898 13.8816 6.31937 13.6429 6.31937Z" fill="white"/>
                            </svg>
                        </a>
                        <a  className="flex items-center gap-2" href={"tel:"+ resource.tel}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.1945 14.7282C16.6697 16.3228 14.6138 17.1183 13.145 16.9857C11.139 16.8044 8.9562 15.7403 7.29926 14.5684C4.8637 12.8458 2.58229 10.1815 1.25288 7.35389C0.313335 5.35589 0.102533 2.89892 1.49994 1.07771C2.01675 0.404538 2.57662 0.0452839 3.41529 0.00335205C4.58037 -0.0533126 4.74357 0.613064 5.14364 1.65116C5.44171 2.42747 5.83951 3.21964 6.06165 4.02428C6.47758 5.52589 5.02351 5.58822 4.8399 6.81558C4.72657 7.58961 5.66384 8.62771 6.08771 9.17963C6.90472 10.2545 7.90538 11.1765 9.04347 11.9029C9.68948 12.3098 10.7299 13.043 11.4688 12.6384C12.6067 12.0151 12.5002 10.0965 14.0902 10.7458C14.9142 11.0813 15.7121 11.5652 16.4986 11.9891C17.7147 12.643 17.658 13.3207 17.1945 14.7282C17.5413 13.6765 16.8477 15.7799 17.1945 14.7282Z" fill="white"/>
                        </svg>
                        <p>{resource.tel}</p>
                        </a>
                    </div>
                </div>
            </Card>
        )
    })

    return(
        <div className="flex gap-8 flex-wrap justify-center">{cards}</div>
    )
}

export default function Page(){
    return(
        <div>
            <section className="px-10 text-center lg:pt-28 py-16 mx-auto">
                <h1 className="text-center mb-16">Resources Catalogue</h1>
                <p className="mb-24 w-4/5 mx-auto">Your well-being is important, and there are resources available to support you. You&apos;re not alone, and taking that first step can make a significant difference in your journey toward healing.</p>
                <ResourceCards />
            </section>
            <div className={`${curves.curve} ${curves.curveResources}`}>
                <Image className={`mx-auto w-3/5 sm:w-2/5 relative`} alt="Illustration of a hand holding a smartphone with notification's icons around" src="./graphics/illustration-resources.svg" width={458} height={488}/>
            </div>
        </div>
    )
}