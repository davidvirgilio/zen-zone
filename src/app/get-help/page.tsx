import Image from "next/image";
import style from './getHelp.module.css'
import curves from '@/app/ui/styles/curves.module.css'
import { ResourcesButton } from "@/components/ResourcesButton"
import contactList from "./contactList.json"


function Contacts(){
    
    const list = contactList.map((item, index)=>{
        const contacts = item.contacts.map((contact, index)=>{
            return(
                <div key={index} className="contact flex flex-col gap-2 bg-white rounded-2xl font-medium p-2">
                    <p>{contact.name}</p>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            {contact.phoneNumber && <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>}
                            {contact.email && <a className={`underline`} href={`mailto:${contact.email}`}>{contact.email}</a>}
                            {contact.extra && <p>{contact.extra}</p>}
                            {contact.details && <p>{contact.details}</p>}
                        </div>
                        <div className="flex gap-2">
                            {contact.email && <a className={`${style.icon}`} href={`mailto:${contact.email}`}><Image alt="Email" src="/graphics/icon-email.png" width={90} height={90}/></a>}
                            {contact.phoneNumber && <a className={`${style.icon}`} href={`tel:${contact.phoneNumber}`}><Image alt="Call" src={"/graphics/icon-phone.png"} width={90} height={90}/></a>}
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <details key={++index} className={`${style.dropDetails}`} style={item.color}> 
                <summary className="flex justify-between items-center">{item.level}
                        <span className={style.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
                                <path d="M26 2L14 14L2 2" stroke="#212121" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                </summary>
                <div className="flex flex-col gap-4">
                    {contacts}
                </div>
            </details>
        );
    })
        return(
            <div className="flex flex-col gap-16 w-full max-w-screen-sm">
                {list}
            </div>
        )
}



export default function Page(){
    return(
        <div >
            <section className="p-10 lg:px-24 text-center lg:py-28 max-w-screen-xl mx-auto mb-8">
                <h1 className="mb-16">Get help now</h1>
                <p>If you&apos;re facing a mental health emergency, don&apos;t hesitate to seek help now. Reach out to a trusted friend, family member, or a mental health professional.</p>
            </section>
            <div className="flex px-10 justify-center gap-8 mx-auto mb-16">
                <div className={`${style.levelBar} rounded-md w-8 lg:w-12`}></div>
                <Contacts />
            </div>
            <ResourcesButton />
            <div className={`${curves.curve} ${curves.curveGetHelp}`}>
                <Image className={`mx-auto w-3/5 sm:w-2/5 relative`} alt="Illustration of a men sitting and thinking" src="./graphics/illustration-sitting.svg" width={458} height={488}/>
            </div>
        </div>
    )
}