
import React, {useState} from "react"
import { Card } from "flowbite-react"
import styles from  '../app/ui/styles/FactCards.module.css'


const factsArray = [
    {name: "Fact 1", text:"This is the back of the fact"},
    {name: "Fact 2", text:"This is the back of the fact"},
    {name: "Fact 3", text:"This is the back of the fact"},
    {name: "Fact 4", text:"This is the back of the fact"},
    {name: "Fact 5", text:"This is the back of the fact"},
    {name: "Fact 6", text:"This is the back of the fact"},
]

function FactCard({name, text}:{name: string, text: string}){
    const [isFlipped, setIsFlipped] = useState(false);
    const handledCardClick = ()=>{
        setIsFlipped(!isFlipped);
    }

    return(
        <Card className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handledCardClick}>
            <div className={`${styles.cardInner}`}>
                <div className={`${styles.cardFront}`}>
                    <h2>{name}</h2>
                </div>
                <div className={`${styles.cardBack}`}>
                    <p>{text}</p>
                </div>
            </div>
        </Card>
    )
}

export function FactCards(){

    const facts = factsArray.map((fact, index)=>{
        return (<FactCard key={index} name={fact.name} text={fact.text} />)
    })
    return(
            <div className="flex flex-wrap gap-8 justify-center" >{facts}</div>
    )

}