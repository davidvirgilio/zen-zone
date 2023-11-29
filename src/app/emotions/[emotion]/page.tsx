import emotions from '@/content/emotions.json'
import style from './emotion.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'flowbite-react';



function Content({emotion}:{emotion:string}){
    switch (emotion){
        case "joy":
            return(
                <>
                    <Image className='mx-auto h-auto' alt={`This is how ${emotion} works to help us`} src="/graphics/infographic.svg" width={921} height={494} priority/>
                    <section>
                        <h2>How can you bring happiness into your daily life?</h2>
                        <p>Chasing happiness is something everyone does. Almost everything we do is because we want to be happy.</p>
                        <p>Joy is a deep and uplifting feeling. It makes our connections with others enjoyable, gives meaning to what we do every day, and keeps us motivated.</p>
                    </section>
                    <section className={style.greenBox}>
                        <Image src={'/graphics/tape.svg'} alt='Tape' width={192} height={180} />
                        <h3>Joy and happiness are not exactly the same.</h3>
                        <p>Joy is in the heart. Happiness is on the face. Joy endures hardship and trials and connects with meaning and purpose.</p>
                    </section>
                    <section className='px-10'>
                        <h2>BOOST YOUR JOY IN 6 STEPS</h2>
                        <ol>
                            <div>
                                <li>
                                    <dt>Connect with Others:</dt>
                                    <dd>Make good relationships with friends and family. Do things with people you like can make you happy.</dd>
                                </li>
                                <li>
                                    <dt>Stay Active:</dt>
                                    <dd>Do physical activities. Take a walk or do exercises you like to feel happy.</dd>
                                </li>
                                <li>
                                    <dt>Handle Stress:</dt>
                                    <dd>Find ways to deal with stress. Relax with deep breathing or meditation to be more joyful.</dd>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <dt>Good Food for the Brain:</dt>
                                    <dd>Eat nourishing foods for a happy brain. Fish or nuts with omega-3 fatty acids help the brain and make you feel joyful.</dd>
                                </li>
                                <li>
                                    <dt>Stay Active: </dt>
                                    <dd>Do physical activities. Take a walk or do exercises you like to feel happy.</dd>
                                </li>
                                <li>
                                    <dt>Handle Stress: </dt>
                                    <dd>Find ways to deal with stress. Relax with deep breathing or meditation to be more joyful.</dd>
                                </li>
                            </div>
                        </ol>
                    </section>
                </>
            )
        case "trust":
            return (
                <>
                <section className='mb-32'>
                    <div className='flex gap-20 lg:gap-40  flex-wrap item-start justify-center py-20'>
                        <Image className={style.mirror} alt='Girl hugging herself in front of a mirror' src="/graphics/trust-mirror.svg" width={558} height={671.746} />
                        <figure className='flex flex-col justify-center gap-8'>
                            <div className={style.note}>
                                <Image alt='tape' src="/graphics/tape-2.svg" width={140} height={121} />
                                <div>
                                    <span className={style.shelby}>Think Big</span>
                                    <p className='font-bold'>TRUST YOURSELF AND MAKE IT HAPPEN</p>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <p>Trust plays a crucial role in  your mental health, influencing various aspects of well-being and contributing to a sense of security and stability.</p>    
                </section>
                <ol className={style.tips}>
                    <div>
                        <Image alt='piece of a puzzle' src="/graphics/puzzle.svg" width={150} height={151.52} />
                        <li>Trust is a belief in a probability that a person will behave in certain ways. This is a gradual process, often taking years to develop.</li>
                    </div>
                    <div>
                        <Image alt="A person's flexed arm" src="/graphics/muscle.svg" width={150} height={159.03} />
                        <li>Trust is like the glue that makes relationships strong, bringing in feelings of closeness and safety.</li>
                    </div>
                    <div>
                        <Image alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                        <li>Trust is when you feel sure and safe that your partner really cares about you.</li>
                    </div>
                </ol>
                <section className='pt-20'>
                    <h2>HOW TO DEVELOP MY SELF-CONFIDENCE AND SELF-TRUST</h2>
                    <ul className={style.bulletList}>
                        <div>
                            <li>Believing in one&apos;s abilities, decisions, and judgment.</li>
                            <li>Creating a positive internal dialogue.</li> <li>Navigating challenges with resilience.</li> <li>Viewing setbacks as opportunities for growth.</li>
                            <li>Acknowledging personal strengths.</li>
                        </div>
                        <div>
                            <li>Learning from experiences.</li>
                            <li>  Recognizing the capacity to overcome adversity.</li>
                            <li>  Fostering trust in oneself for pursuing goals and making decisions.</li>
                            <li>  Developing a solid foundation to face life&apos;s uncertainties with a positive and empowered mindset.</li>
                        </div>
                    </ul>
                </section>
                </>
            )
        case "fear":
            return (
                <>
                    <div className='flex flex-col-reverse gap-10 sm:grid sm:grid-cols-2 md:gap-16 py-16'>
                        <p className='text-left'>Fear, a primal response honed through evolution, alerts us to threats. When danger arises, brain regions like the amygdala and prefrontal cortex swiftly coordinate signals, enhancing survival by heightening awareness, focus, and resource mobilization. Recognizing fear as a protective mechanism empowers individuals to manage and navigate it effectively.</p>
                        <Image className='w-4/5 h-auto mx-auto' src={"/graphics/fear.svg"}  alt='A girl with an obvious expression of fear' width={484.69} height={516.39}/>
                    </div>
                    <section>
                        <h2>STRATEGIES FOR MANAGING AND COPING WITH FEAR</h2>
                        <ul className={style.bulletList}>
                            <div>
                                <li>Recognize and accept fear without judgment.</li>
                                <li>Use techniques like deep breathing to manage physiological responses.</li>
                                <li>Challenge negative thoughts with affirmations.</li>
                                <li>Divide overwhelming fears into smaller, manageable steps.</li>
                                <li>Share fears with trusted individuals for emotional support.</li>
                                <li>Stay present to reduce anxiety about the future.</li>
                            </div>
                            <div>
                                <li>Establish achievable goals related to overcoming fears.</li>
                                <li>Engage in regular exercise for emotional regulation.</li>
                                <li>Picture successfully confronting and overcoming fear.</li>
                                <li>Explore gradual exposure to fears.</li>
                                <li>Prioritize well-being through sleep, nutrition, and joyful activities.</li>
                                <li>Shift focus from fear to gratitude.</li>
                                <li>Organize tasks to reduce feelings of being overwhelmed.</li>
                            </div>
                        </ul>
                    </section>
                    <section>
                        <h2>Confronting fears and personal growth</h2>
                        <p>Confronting fears not only breaks barriers to personal development but also lights the path to authenticity, encouraging a life lived courageously. In this pursuit, individuals not only conquer specific fears but also uncover a deeper understanding of themselves, fostering a resilient spirit essential for sustained personal growth.</p>
                    </section>
                </>
            )
    }
}




export default function Page({params}:{params: {emotion :string}}){
    const emotion = params.emotion;
    const data = emotions.find(({name})=> name === emotion);
    
    const randomEmotions: any = [];

    while(randomEmotions.length < 3){
        const randomIndex = Math.floor(Math.random() * emotions.length);
        if(!randomEmotions.includes(randomIndex) && data && randomIndex !== emotions.indexOf(data)){
            randomEmotions.push(randomIndex);
        }
    }

    const otherEmotions = randomEmotions.map((emotionIndex: any, index: number) => {
        const emotionRandom =  emotions[emotionIndex];
        return(
            <Link key={index} href={`/emotions/${emotionRandom.name}`}>
                <Image
                    src={`/graphics/face-${emotionRandom.name}.svg`}
                    alt={emotionRandom.name}
                    width={emotionRandom.width}
                    height={emotionRandom.height}
                    priority
                    className={`w-full h-auto relative`}
                />
            </Link>
        )
    })


    if(data){
        const videoArray = data.videos;
        const videos = videoArray.map((video, index)=>{
            return(
                <div key={index} className={`flex flex-col items-center p-8 ${style.card} bg-light-green gap-8 w-80`}>
                    <h4 className='font-normal'>{video.title}</h4>
                    <Link className={`py-1 ${style.btn}`} href={video.url} target='_blank'>Watch</Link>
                </div>
            )
        })
        
        return (
            <div>
                <section className='mb-16'>
                    <Link href={"../for-me"} className='block p-8'>
                        <svg className={style.chevron} xmlns="http://www.w3.org/2000/svg" width="26" height="46" viewBox="0 0 26 46" fill="none">
                            <path d="M23 43L3 23L23 3" stroke="#6169BC" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <svg className={`w-full h-auto ${style.bgTop}`} width="1440" height="310" viewBox="0 0 1440 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1440 289.39C1278.38 120.9 1050.97 16 799.06 16H650C394.48 16 163.82 122.49 0 293.5V309.09H1440V289.39Z" fill={data.backgroundColors?.fill}/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1440 306.36V272.48C1266.31 105.62 1005.05 0 714.5 0C423.95 0 173.62 101.26 0 262.1V295.35C168.34 130.12 425.14 24 714.5 24C1003.86 24 1271.96 134.85 1440 306.36Z" fill={data.backgroundColors?.outsideStroke}/>
                    </svg>
                    <main style={{backgroundColor: data.backgroundColors?.fill}} className='px-8 mx-auto'>
                        <h1 className='uppercase text-center'>{emotion}</h1>
                        <div className={`max-w-screen-xl mx-auto mb-40 ${style.content}`}>
                            <Content emotion={emotion}/>
                        </div>
                         <Link href={"../resources"} className="btn mt-16 mx-auto">Find more resources</Link>
                    </main>
                    <svg className={`w-full h-auto ${style.bgBottom}`} width="1440" height="286" viewBox="0 0 1440 286" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.379883 0C161.18 165.41 386.09 268.18 635 268.18H805.06C1053.58 268.18 1278.09 165.38 1438.4 0H0.379883Z" fill={data.backgroundColors?.fill}/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1436.38 0C1263.84 158.92 1008.42 260.37 721.57 261.11C432.5 261.85 174.8 160.16 1.39 0H0V31.14C178.34 188.04 436.36 285.85 721.63 285.11C1005.86 284.38 1262.54 185.97 1440 29.15V0H1436.38Z" fill={data.backgroundColors?.outsideStroke}/>
                    </svg>
                </section>
                <section className='mb-32'>
                    <h2 className='text-center mb-16'>Related Videos</h2>
                    <div className='flex gap-8 px-10 flex-wrap justify-center'>
                        {videos}
                    </div>
                </section>
                <section className='px-10 mb-16'>
                    <h2>Explore other moods...</h2>
                    <div className='flex gap-4 sm:gap-10 lg:gap-20 py-8 justify-center'>{otherEmotions}</div>
                </section>
            </div>
        )
    }
}