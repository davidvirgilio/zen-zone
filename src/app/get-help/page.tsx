import { TextSection } from "@/components/components"
import Image from "next/image";
import style from './getHelp.module.css'
import { ResourcesButton } from "@/components/ResourcesButton"
import contactList from "./contactList.json"


function Contacts(){
    
    const list = contactList.map((item, index)=>{
        const contacts = item.contacts.map((contact, index)=>{
            return(
                <div key={index} className="contact flex flex-col gap-2 bg-white rounded-xl font-medium p-2">
                    <p>{contact.name}</p>
                    <div className="flex justify-between">
                        <p>{contact.phoneNumber}</p>
                        <div className="flex gap-2">
                            <a className={`${style.icon}`} href={`mailto:${contact.email}`}><Image alt="Email" src="/graphics/icon-email.png" width={90} height={90}/></a>
                            <a className={`${style.icon}`} href={`tel:${contact.phoneNumber}`}><Image alt="Call" src={"/graphics/icon-phone.png"} width={90} height={90}/></a>
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
            <div className="flex flex-col gap-16">
                {list}
            </div>
        )
}



export default function Page(){
    return(
        <div >
            <TextSection
                title="Get help now"
                text="Lorem ipsum dolor sit amet consectetur. Elementum etiam egestas maecenas sagittis sollicitudin. Sit netus tristique adipiscing at. Pellentesque eget nisi integer sit dignissim at."
            />
            <div className="flex px-10 justify-center gap-8 mx-auto mb-16">
                <div className={`${style.levelBar} rounded-sm`}></div>
                <Contacts />
            </div>
            <ResourcesButton />
            <div>
                <Image className={style.illustration} alt="Illustration of a men sitting and thinking" src="./graphics/illustration-sitting.svg" width={458} height={488}/>
            </div>
        </div>
    )
}