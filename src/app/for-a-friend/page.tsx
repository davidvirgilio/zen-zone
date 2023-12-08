'use client'
import style from './ForAFriend.module.css'
import curves from '@/app/ui/styles/curves.module.css'
import { TextSection } from "@/components/components"
import Image from "next/image"
import { ResourcesButton } from "@/components/ResourcesButton"



const tips = [
    {
        summary: "Pay Attention",
        description: "Any noticeable changes in the behaviour are warning signs your friend might be going through a challenging time. These changes can include:",
        list: [
            "Increased use of recreational substances, such as alcohol, nicotine, and caffeine",
            "Taking about how much life sucks.",
            "Appearing tired or distant.","Frequent mood swings"
        ]
    },
    {
        summary: "Start a Conversation",
        description: "Choose a Comfortable setting.",
        list: [
            "Over the phone.",
            "While driving together.",
            "At a favourite hang out spot",
            "While working on a project",
            "Mention the changes in them you’ve noted.",
            "\"I haven\’t seen you around much these days. Is everything okay?\"",
            "Don\’t blame or shame your friend",
        ]
    },
    {
        summary: "Keep it Going",
        description: "Ask questions and listen to what your friend is saying to genuinely understand their perspective.",
        list: [
            "\"The other day you said your life sucks... What\’s that like for you? Avoid instantly problem-solving.\"",
            "Don\’t make it seem like he\’s overreacting and don\’t change the subject.",
            "Back him up and acknowledge his feelings: “That sounds really hard.”",
            "If you’re still worried about him, ask: “Are you thinking about suicide?” If he says yes, don’t panic.",
            "Let him know you’re there for him: “Thanks for telling me. That’s really hard to do. Can you tell me more about it? I’m here for you.”"
        ]
    },
    {
        summary: "Sick to Your Role",
        description: "You’re a supportive empathetic friend, and not necessarily a professional counsellor.",
        list: [
            "Did your friend discuss what they are experiencing with anyone else? Encourage them to reach out to other possible supporters, such as parents, guardians, peers, partners and mentors.",
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
        <section className='p-10 text-center lg:px-24 lg:py-28 max-w-screen-2xl mx-auto'>
        <h1 className='mb-16'>Through thick and thin</h1>
        <p className='w-full mb-4'>Thank you for being attentive and recognizing when your friend may be going through a challenging time. It takes a caring and observant individual to notice the subtle signs.</p>
        <p className='w-full mb-4'>When supporting a friend struggling with mental health, <em>the first step is acknowledging</em> their emotions with compassion, sensitivity and without judgment. Kindly <em>be patient and consistently present</em>, reminding your friend that they&apos;re not alone on this journey.</p>
        <p className='w-full mb-4'> Encourage open communication, express your concern genuinely, and suggest the benefits of help from professionals if needed.</p>
        <p className='w-full mb-4'> Your empathy and understanding can make a significant difference in your friend&apos;s well-being.</p>

      </section>
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