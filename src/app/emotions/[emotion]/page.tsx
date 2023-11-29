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
                    <div className='flex flex-col-reverse gap-10 sm:grid sm:grid-cols-2 md:gap-16 pt-16'>
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
        case "surprise":
            return (
                <>
                    <div className='flex flex-col-reverse items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16 pt-16'>
                        <p className='text-left'>Surprise is when unexpected things happen in life, like challenges or good opportunities. Dealing with these surprises helps us become stronger and better at solving problems. It&apos;s like a way of learning and growing from the unexpected events life throws at us.</p>
                        <Image className='w-4/5 h-auto mx-auto' src={"/graphics/surprise.svg"}  alt='A girl with her hand on her mouth looking surprised' width={613.996} height={860.998}/>
                    </div>
                    <section>
                        <h2>The positive aspects of surprise in life</h2>
                        <ul className={style.bulletList}>
                            <div>
                                <li>Surprises bring unexpected happiness and excitement.</li>
                                <li>Surprises boost creativity by breaking normal routines.</li>
                                <li>Good surprises reduce stress and bring positivity.</li>
                                <li>Surprises make relationships stronger by showing thoughtfulness.</li>
                                <li>Handling surprises helps us become more adaptable.</li>
                            </div>
                            <div>
                                <li>Surprises give us chances to learn and grow.</li>
                                <li>Happy surprises release feel-good chemicals, making us happier.</li>
                                <li>Surprises create unforgettable life moments.</li>
                                <li>Surprises add fun spontaneity, breaking the usual routine.</li>
                                <li>Expecting good surprises makes us more optimistic.</li>
                            </div>
                        </ul>
                    </section>
                    <section>
                        <h2>Strategies for adapting to unexpected events</h2>
                        <ul className={style.bulletList}>
                            <div>
                                <li>Maintain Flexibility.</li>
                                <li>Focus on the present moment.</li>
                                <li>Approach challenges with a problem-solving mindset.</li>
                                <li>Reach out for emotional and practical assistance.</li>
                                <li>Take care of physical and mental well-being.</li>
                                <li>See challenges as opportunities for learning and growth.</li>
                            </div>
                            <div>
                                <li>Establish financial reserves.</li>
                                <li>Stay Positive.</li>
                                <li>Focus on what you can control and find opportunities for growth.</li>
                                <li>Embrace Change: Accept change as a natural part of life.</li>
                                <li>Be aware of potential risks and changes.</li>
                                <li>Celebrate Small Victories.</li>
                            </div>
                        </ul>
                    </section>
                </>
            )
        case "sadness":
            return (
                <>
                <div className='text-left pt-16'>
                    <p>Feeling really sad might make it seem like things won&apos;t get better. But it&apos;s important to know the difference between feeling sad and being depressed:</p>
                    <ul className={style.normalList}>
                        <li>When you&apos;re sad, you can still find moments of happiness or comfort with others.</li>
                        <li>Crying or finding healthy ways to express your feelings can help you feel better.</li>
                        <li>Sad feelings usually get better with time.</li>
                    </ul>
                    <p className='mt-8'>On the other hand, depression means feeling sad, hopeless, and anxious almost all the time for days or weeks, and it often comes with physical symptoms.</p>
                </div>
                <Image priority src={"/graphics/sadness.png"} alt='Infographic of sadness versus depression' width={1340} height={975} />
                <p className='text-left mt-16'>One effective approach to managing uncomfortable or unpleasant emotions is to keep in mind the word PATH.  PATH stands for:</p>
                <section>
                    <h3 className='uppercase lg:py-8'> PAUSE-acknowledge-THINK-HELP:</h3>
                    <div className='md:grid md:grid-cols-2 gap-8 justify-between'>
                        <ol className={style.bigNumbersList}>
                            <li><span>1</span>Pause Stop for a moment. Instead of acting on your feelings right away, give yourself time. You can count to 100 or say the alphabet backward.</li>
                            <li><span>2</span>Acknowledge What You&apos;re Feeling Understand your feelings. Are you mad at someone or sad because your feelings were hurt? It&apos;s okay to feel the way you do.</li>
                            <li><span>3</span>Think Now that you know what you&apos;re feeling, think about how you can make yourself feel better.</li>
                            <li><span>4</span>Help Take action to help yourself based on what you thought about in the &quot;Think&quot; step.</li>
                        </ol>
                        <Image className={`${style.bgEmoji} hidden md:block`} src={"/graphics/bg-sadness.svg"} alt='Sadness emoji' width={1061} height={1061}/>
                    </div>
                </section>
                </>
            )
        case "disgust":
            return(
                <>
                <div className='font-bold py-8 lg:py-16'>
                    <p>&quot;Ugh!&quot; Recognizing the sound and smell of disgust is familiar, even if defining the emotion can be tricky.</p>
                    <p>It&apos;s more common than you might think, and understanding how to identify and handle disgust is crucial for emotional intelligence.</p>
                </div>
                <div className='flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16'>
                    <Image className='w-4/5 h-auto mx-auto' src={"/graphics/disgust.svg"}  alt='A man covering her nose' width={443.038} height={629.835}/>
                    <div className='text-left'>
                        <p>Based on Robert Plutchik&apos;s Wheel of Emotions, disgust is a primal emotion linked to self-preservation.</p>
                        <p className='font-bold'>It&apos;s a natural response that helps living things, including humans and animals, avoid harm from germs or diseases.</p>
                        <p>This emotion is part of the &quot;behavioral immune system&quot;, prompting increased caution in the face of potential contact with harmful pathogens.</p>
                    </div>
                </div>
                <section>
                    <h2>Some things that might cause disgust</h2>
                    <ul className={style.bulletList}>
                        <div>
                            <li><em>Death</em> causes a strong sense of disgust in many people.</li>
                            <li><em>Certain foods</em> , especially unfamiliar ones, can trigger disgust reactions.</li>
                            <li><em>Some animals and insects</em>  provoke strong feelings of disgust.</li>
                            <li>Topics related to <em>sexual taboos</em>  can elicit disgust.</li>
                            <li><em>Injuries</em>  distorting the body, like compound fractures, can be a source of disgust.</li>
                        </div>
                        <div>
                            <li>Personal <em>food preferences</em>  can lead to individualized feelings of disgust.</li>
                            <li>Specific animals may be found disgusting by some people.</li>
                            <li>Disgust arises when perceived dirty or <em>contaminated things</em>  come into contact.</li>
                            <li>All perceived <em>contaminated things</em>  act as triggers for disgust.</li>
                        </div>
                    </ul>
                </section>
                <section className='md:grid md:grid-cols-2 items-center lg:mt-16'>
                    <Image className='w-4/5 h-auto mx-auto py-16' src={"/graphics/ugh.png"}  alt='Ugh' width={446} height={446}/>
                    <div >
                        <h4 className='mb-16'>HOW TO DEAL WITH DISGUST</h4>
                        <ul className={style.normalList}>
                            <li>Accepting things we dislike can reduce stress reactions.</li>
                            <li>Acknowledging disgusting things without intense struggle frees up mental space.</li>
                            <li>Avoiding intense struggle against dislikes, like insects or injuries, can be beneficial.</li>
                            <li>Acceptance, rather than fighting, minimizes the impact of disgust.</li>
                            <li>Practicing feeling disgusted without resistance becomes more achievable with time and practice.</li>
                        </ul>
                    </div>
                </section>
                </>
            )
        case "anger":
            return(
                <>
                <div className='font-bold pt-16 max-w-screen-md mx-auto'>
                    <p>How do you handle things that bother you?</p>
                    <p>Do you sometimes get upset and start shouting? </p>
                    <p>Or do you end up saying unkind things that might hurt others?</p>
                </div>
                <div className='flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16 pt-16'>
                    <Image className='w-4/5 h-auto mx-auto' src={"/graphics/anger.svg"}  alt="A couple's beef" width={616} height={592}/>
                    <div className='text-left'>
                        <p className='font-bold'>Anger is natural and even healthy too. But it&apos;s important to deal with it positively. Uncontrolled anger can take a toll on both your health and your relationships.</p>
                        <p>Anger can be caused by numerous reasons and situations like when someone doesn’t agree with you or some unexpected situation or due to others behaviours. So here are some tips to help you control your anger.</p>
                    </div>
                </div>
                <section>
                  <ul className={style.angerTips}>
                    <li>
                        <Image alt='piece of a puzzle' src="/graphics/puzzle.svg" width={150} height={151.52} />
                        <h4>Think Before You Speak</h4>
                        <ul className={style.normalList}>
                            <li>Pause and count to 100.</li>
                            <li>Repeat calming phrases like &quot;Take it easy.&quot;</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt="A person's flexed arm" src="/graphics/muscle.svg" width={150} height={159.03} />
                        <h4>Look for Consequences</h4>
                        <ul className={style.normalList}>
                            <li>Consider the impact.</li>
                            <li>Assess if a strong response is necessary.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                        <h4>Communicate with Others</h4>
                        <ul className={style.normalList}>
                            <li>Talk openly about frustrations.</li>
                            <li> Understand intentions to prevent repeat actions</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='piece of a puzzle' src="/graphics/puzzle.svg" width={150} height={151.52} />
                        <h4>Take a Short Break</h4>
                        <ul className={style.normalList}>
                            <li>Nap or take a walk when angry.</li>
                            <li>Return for a more rational perspective.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                        <h4>Take Deep Breaths</h4>
                        <ul className={style.normalList}>
                            <li>Practice deep breathing.</li>
                            <li>Calm your body and regain control.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                        <h4>Identify Triggers</h4>
                        <ul className={style.normalList}>
                            <li>Know what makes you angry.</li>
                            <li>RWork on preventing it in similar situations.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='piece of a puzzle' src="/graphics/puzzle.svg" width={150} height={151.52} />
                        <h4>Talk with Friends or Seek Professional Help</h4>
                        <ul className={style.normalList}>
                            <li>Share feelings with friends.</li>
                            <li>Seek professional help for relief.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt="A person's flexed arm" src="/graphics/muscle.svg" width={150} height={159.03} />
                        <h4>Look from Others&apos; Perspective</h4>
                        <ul className={style.normalList}>
                            <li>Understand the other person&apos;s view.</li>
                            <li>Maintain healthy relationships.</li>
                        </ul>
                    </li>
                  </ul>
                </section>
                </>
            )
        case "anticipation":
            return(
                <>
                    <div className='font-bold py-16 max-w-screen-md mx-auto'>
                        <p>Anticipation is the emotion we feel when we&apos;re looking forward to something happening, whether it&apos;s good or bad, leaving us in a state of anxious suspense. Some people might feel excitement, while others might just feel a bit nervous. Anticipatory concerns are the thoughts that pop up while experiencing anticipation. What&apos;s going to happen next? What can I do right now about something that might happen down the road? Individuals with GI symptoms often find themselves pondering these questions.</p>
                    </div>
                    <Image className='mx-auto' src={"/graphics/anticipation.svg"} alt='A boy on a lader trying to reach the stars' width={517} height={618} />
                    <section>
                        <h2>Mindfulness techniques for managing anticipatory stress</h2>
                        <ul className={style.bulletList}>
                            <div>
                                <li>Reduce anxiety with intentional deep breathing, focusing on breath sensations to stay present.</li>
                                <li>Release tension by scanning and relaxing each part of your body holding stress.</li>
                                <li>Cultivate awareness to break the cycle of worry and anticipate thoughts non-judgmentally.</li>
                                <li>Stay present by using senses to anchor yourself in reality.</li>
                                <li>Focus on each step and body sensations during a mindful walk to be present.</li>
                            </div>
                            <div>
                                <li>Counter negative thoughts by visualizing positive outcomes.</li>
                                <li>Shift focus from stressors with calming guided imagery recordings.</li>
                                <li>Embrace uncertainty by acknowledging and accepting lack of control.</li>
                                <li>Break anticipatory stress during meals by savouring each bite mindfully.</li>
                                <li>Shift perspective by reflecting on positive aspects of life through gratitude.</li>
                            </div>
                        </ul>
                    </section>
                    <section>
                        <h2>Finding a balance between living in the present and planning for the future</h2>
                        <p>Balancing living in the present and planning for the future is crucial for a fulfilling life. While future planning provides direction, too much focus can detract from present joys. Conversely, solely living in the present may hinder future goals. Striking this balance involves appreciating current moments while responsibly planning for the future. It&apos;s a mindful dance between enjoying the now and preparing for what lies ahead.</p>
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
            <div className='overflow-hidden'>
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