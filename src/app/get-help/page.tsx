import { TextSection } from "@/components/components"

const contactList = [
    {
        level: "Emergency Contacts",
        contacts: [
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"},
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"}
        ]
    },
    {
        level: "High Level of Urgency",
        contacts: [
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"},
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"}
        ]
    },
    {
        level: "Medium Level of Urgency",
        contacts: [
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"},
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"}
        ]
    },
    {
        level: "Low Level of Urgency",
        contacts: [
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"},
            { name: "Contact Name", phoneNumber: "+1 (503) 284-7969", email: "hello@zenzonewell.ca"}
        ]
    },
];

// function Tips(){
//     const list = contactList.map((item, index)=>{
//         return (
//             <li key={++index} className="list-disc ml-6">
//                 {item.level}

//             </li>
//         );
//     })
//         return(
//             <li className="flex items-start gap-2">
//                 <span className="block bg-light-green px-8 py-4 rounded-s-lg">{index}</span>
//                 <details className={` ${style.dropDetails} w-full bg-light-green px-8 py-4 rounded-e-lg`}>
//                     <summary className="flex justify-between items-center">{summary}
//                         <span className={style.arrow}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
//                                 <path d="M26 2L14 14L2 2" stroke="#6169BC" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </span>
//                     </summary>
//                     <p>{ description }</p>
//                     <ul className="flex flex-col gap-2">
//                         {listItems}
//                     </ul>
//                 </details>
//             </li>
//         )
// }



export default function Page(){
    return(
        <div >
            <TextSection
                title="Get help now"
                text="Lorem ipsum dolor sit amet consectetur. Elementum etiam egestas maecenas sagittis sollicitudin. Sit netus tristique adipiscing at. Pellentesque eget nisi integer sit dignissim at."
            />
            <div>
                <div className="levelBar"></div>
                
            </div>
        </div>
    )
}