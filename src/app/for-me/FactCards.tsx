
import React, {useState} from "react"
import { Card } from "flowbite-react"
import styles from  './FactCards.module.css'
import Image from "next/image"


const factsArray = [
    {
        name: "Tired when the day just started? ", 
        text:"Step outside for 5 minutes",
        list: [
            "Slip on shoes and stand outside. Grab a jacket if it is chilly.",
            "Open up a window, sunshine and fresh air can be nourishing."
        ],
        image: "card-rest.svg"
    },
    {
        name: "Brain fog bringing you down?", 
        text:"Listen to some music",
        list: [
            "Music is a great way to lift the mood.",
            "Plug in some earphones and find a beat."
        ],
        image: "card-music.svg"
    },
    {
        name: "Feel others work more?", 
        text:"Being busy isn’t the same as being productive.",
        list: [
            "Life is not a contest on who can so the most on the least amount of sleep and food.",
            "Go at your best pace."
        ],
        image: "card-book.svg"
    },
    {
        name: "Overwhelmed by involvements?", 
        text:"Take a moment to sit down in a quiet place.",
        list: [
            "Schedule a time to sit undisturbed by devices to reflect on and define your priorities.",
            "It’s ok to say “No”, or “I can’t”."
        ],
        image: "card-calendar.svg"
    },
    {
        name: "Pressure can be motivating", 
        text:"But breaks can improve your work.",
        list: [
            "Recognize the sign of negative pressure.",
            "Try to push through a panic attack might make you feel worse and reduce your work quality."
        ],
        image: "card-coffee.svg"
    },
]

function FactCard({card}:any){
    const [isFlipped, setIsFlipped] = useState(false);
    const handledCardClick = ()=>{
        setIsFlipped(!isFlipped);
    }    
    return(
        <Card className={`${styles.card} ${isFlipped ? styles.flipped : ''} bg-light-green`} onClick={handledCardClick}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront} flex flex-col gap-4 lg:gap-14`}>
                    <Image alt={card.name} src={`./graphics/${card.image}`} width={131} height={131}></Image>
                    <h2>{card.name}</h2>
                </div>
                <div className={`${styles.cardBack}`}>
                    <p>{card.text}</p>
                    <ul className="flex flex-col gap-3">
                        {card.list.map((item: string, index: number) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export function FactCards(){
    
    const facts = factsArray.map((fact, index)=>{
        return (<FactCard key={index} card={fact} />)
    })
    return(
            <div className="flex flex-wrap gap-8 justify-center" >{facts}</div>
    )

}