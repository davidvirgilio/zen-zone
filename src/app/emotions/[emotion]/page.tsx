import emotions from '@/content/emotions.json'
import style from './emotion.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function Page({params}:{params: {emotion :string}}){
    const emotion = params.emotion;
    const data = emotions.find(({name})=> name === emotion);
    
    const randomEmotions: any = [];

    while(randomEmotions.length < 3){
        const randomIndex = Math.floor(Math.random() * emotions.length);
        if(!randomEmotions.includes(randomIndex)){
            randomEmotions.push(randomIndex);
        }
    }
    console.log(randomEmotions);

    if(data){
        return (
            <div>
                <Link href={"../for-me"} className='block p-8'>
                    <svg className={style.chevron} xmlns="http://www.w3.org/2000/svg" width="26" height="46" viewBox="0 0 26 46" fill="none">
                        <path d="M23 43L3 23L23 3" stroke="#6169BC" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <svg className={`w-full h-auto ${style.bgTop}`} width="1440" height="310" viewBox="0 0 1440 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1440 289.39C1278.38 120.9 1050.97 16 799.06 16H650C394.48 16 163.82 122.49 0 293.5V309.09H1440V289.39Z" fill={data.backgroundColors?.fill}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1440 306.36V272.48C1266.31 105.62 1005.05 0 714.5 0C423.95 0 173.62 101.26 0 262.1V295.35C168.34 130.12 425.14 24 714.5 24C1003.86 24 1271.96 134.85 1440 306.36Z" fill={data.backgroundColors?.outsideStroke}/>
                </svg>
                <main style={{backgroundColor: data.backgroundColors?.fill}} className='px-8'>
                    <h1 className='uppercase text-center'>{emotion}</h1>
                    <h3>What is it?</h3>
                    <Image alt={`This is how ${emotion} works to help us`} src="/graphics/infographic.svg" width={921} height={494} />
                    <p>{data.description}</p>
                    <Link href={"../resources"} className="btn mt-16 mx-auto">Find more resources</Link>
                </main>
                <svg className={`w-full h-auto ${style.bgBottom}`} width="1440" height="286" viewBox="0 0 1440 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.379883 0C161.18 165.41 386.09 268.18 635 268.18H805.06C1053.58 268.18 1278.09 165.38 1438.4 0H0.379883Z" fill={data.backgroundColors?.fill}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1436.38 0C1263.84 158.92 1008.42 260.37 721.57 261.11C432.5 261.85 174.8 160.16 1.39 0H0V31.14C178.34 188.04 436.36 285.85 721.63 285.11C1005.86 284.38 1262.54 185.97 1440 29.15V0H1436.38Z" fill={data.backgroundColors?.outsideStroke}/>
                </svg>
            </div>
        )
    }
}