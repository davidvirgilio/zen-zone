'use client'
import style from './ForAFriend.module.css'
import curves from '@/app/ui/styles/curves.module.css'
import { TextSection } from "@/components/components"
import Image from "next/image"
import { ResourcesButton } from "@/components/ResourcesButton"



const tips = [
    {
        summary: "Pay Attention",
        description: "Any noticeable change in the behaviour is a warning sign your friend might not be doing well. These change could include:",
        list: [
            "Drinking more than usual.",
            "Taking about how much life sucks.",
            "Appearing tired or distant.","Being more irritable or angry"
        ]
    },
    {
        summary: "Start a Conversation",
        description: "Choose a Comfortable setting, and mention what you’ve noticed.",
        list: [
            "Over the phone.",
            "While driving in the car .",
            "Over drinks at a favorite hang out.",
            "While working on a project",
            "\"I haven\’t seen you around much these days. Is everything okay?\"",
            "Don\’t blame or shame your friend",
        ]
    },
    {
        summary: "Keep it Going",
        description: "Ask questions and listen to what he\’s saying.",
        list: [
            "\"The other day you said your life sucks... What\’s that like for you? Avoid instantly problem-solving.\"",
            "Don\’t make it seem like he\’s overreacting and don\’t change the subject.",
            "Back him up and acknowledge his feelings: “That sounds really hard.”"
        ]
    },
    {
        summary: "Sick to Your Role",
        description: "You’re a friend, not a counsellor.",
        list: [
            "Who else has he told? Encourage him to reach out to others.",
            "Call Crisis Services Canada together: 1-833-456-4566.",
            "Following the conversation, check in with him often"
        ]
    },
]

function Tips({index, description, summary, list}:{index: number, description: string, summary: string, list:string[]}){
    const listItems = list.map((item, index)=>{
        return (<li key={++index} className="list-disc ml-6">{item}</li>)
    })
        return(
            <li className="flex items-start gap-2">
                <span className="block bg-light-green px-8 py-4 rounded-s-lg font-bold">{index}</span>
                <details className={` ${style.dropDetails} w-full bg-light-green px-8 py-4 rounded-e-lg`}>
                    <summary className="flex justify-between items-center font-bold">{summary}
                        <span className={style.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path d="M26 2L14 14L2 2" stroke="#6169BC" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </summary>
                    <p>{ description }</p>
                    <ul className="flex flex-col gap-2">
                        {listItems}
                    </ul>
                </details>
            </li>
        )
}


    
export default function Page(){
    const tipBanners = tips.map((tip, index)=>{
        return (<Tips key={index} index={++index} description={tip.description} summary={tip.summary} list={tip.list} />)
    })
    return(
    <main>
        <div className={style.cover}><p>Help a friend</p></div>
        <TextSection 
            title={'What can I do?'}
            text={"Being a good friend to someone facing mental health challenges involves creating a safe, non-judgmental space for open communication. Listen actively, validate their emotions, and encourage them to seek professional help. Remind them that they're not alone, and offer a consistent presence in their life. Your support matters."}
        />
        <section className="mb-16 max-w-screen-sm lg:max-w-screen-lg mx-auto lg:mb-52">
            <h2 className="text-center mb-20">How to approach your friend?</h2>
            <ol className="flex flex-col gap-10 px-4 lg:mb-52">{tipBanners}</ol>
            <ResourcesButton />
        </section>
        <div className={`${curves.curve} ${curves.curveForAFriend}`}>
            <Image className={`mx-auto w-4/5 sm:w-3/5 relative`} alt="Illustration of two friend talking" src="./graphics/illustration-friends.svg" width={666} height={323} />
        </div>
    </main>
)
}