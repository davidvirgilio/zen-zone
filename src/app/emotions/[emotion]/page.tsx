import emotions from '@/content/emotions.json'
import style from './emotion.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'flowbite-react';

function GreenBox({emotion, synonyms}:{emotion: string, synonyms: string}){
    return(
        <section className={style.greenBox}>
                        <Image src={'/graphics/tape.svg'} alt='Tape' width={192} height={180} />
                        <h3>You might also know <span className='capitalize'>{emotion}</span> as…</h3>
                        <p>{synonyms}</p>
                </section>
    )
}

function Content({emotion}:{emotion:string}){
    switch (emotion){
        case "joy":
            return(
                <>
                    <Image className='mx-auto h-auto' alt={`This is how ${emotion} works to help us`} src="/graphics/infographic.svg" width={921} height={494} priority/>
                    <section>
                        <p><em>Joy</em> is one of eight primary emotions a person can feel. 
It emerges when the individual’s needs, such as <em>physical, emotional, spiritual, etc.</em> are satisfied. Additionally, joy can occur when the individual experiences an event or interaction they perceive to be pleasant, fulfilling, or successful.</p>
                        <p>Identifying sources of happiness allows individuals to establish guiding principles, which shape their journey and motivate them to pursue this emotion.</p>
                        <p>Joy can become a concern in cases of hypermania, substance abuse, and when the moments of happiness are scarce. Lack of joy often points to underlying needs that require attention and fulfillment.</p>
                    </section>
                    <GreenBox emotion={emotion} synonyms='Happiness - Satisfaction - Glee Bliss - Euphoria' />
                    <section className={`px-10 ${style.joyTips}`}>
                        <h2>Zenful Tips</h2>
                        <ul>
                            <div>
                                <li>
                                    <dt>Connect with Others:</dt>
                                    <dd>Make good relationships with friends and family. Doing things with people you like can make you happy.</dd>
                                </li>
                                <li>
                                    <dt>Stay Active:</dt>
                                    <dd>Do physical activities. Take a walk or do exercises you like to feel happy.</dd>
                                </li>
                            </div>
                            <div>
                              <li>
                                    <dt>Handle Stress:</dt>
                                    <dd>Find ways to deal with stress. Relax with deep breathing or meditation to be more joyful.</dd>
                                </li>
                                <li>
                                    <dt>Good Food for the Brain:</dt>
                                    <dd>Eat nourishing foods for a happy brain. Fish or nuts with omega-3 fatty acids help the brain and make you feel joyful.</dd>
                                </li>
                            </div>
                        </ul>
                    </section>
                </>
            )
        case "trust":
            return (
                <>
                <section className='mb-32'>
                    <div className='py-20'>
                        <Image className={style.mirror} alt='Girl hugging herself in front of a mirror' src="/graphics/trust-mirror.svg" width={558} height={671.746} />
                        <div className='text-left'>
                            <p>Trust is the sense of <em>security and confidence</em> evoked by the reliability of an event, object or person. </p>
                            <p>This emotion involves <em>searching for credibility, truth, or other benefits</em> in the world around, while weighing the possible risks.</p>  
                            <p>Integral to goal achievement, trust establishes expectations that motivate and guide individuals toward success. </p>  
                            <p>Conversely, a lack of trust or confidence in the potential for achievements or personal abilities may adversely affect both mental and physical health.</p>  
                        </div>
                    </div>
                </section>
                <GreenBox emotion={emotion} synonyms='Confidence - Credence - Faith Belief - Certainty' />
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
                    <h2>Zenful Tips</h2>
                    <ul className={style.bulletList}>
                        <div>
                            <li>Believing in your abilities, decisions, and judgment.</li>
                            <li>Creating a positive internal dialogue.</li> <li>Navigating challenges with resilience.</li> <li>Viewing setbacks as opportunities for growth.</li>
                            <li>Acknowledging personal strengths.</li>
                        </div>
                        <div>
                            <li>Learn from experiences.</li>
                            <li> Recognize the capacity to overcome adversity.</li>
                            <li>Foster trust in yourself to pursue goals and improve decision making</li>
                            <li>Develop the skill to face life&apos;s uncertainties with a positive and empowered mindset</li>
                        </div>
                    </ul>
                </section>
                </>
            )
        case "fear":
            return (
                <>
                    <div className='pt-16 flex-col-reverse sm:flex-row text-left mb-24 gap-8 flex flex-wrap'>
                        <div className='sm:w-1/2'>
                            <p>Fear, Fear, a primal response honed through evolution, <em>alerts us to threats</em>. </p>
                            <p>When danger arises, brain regions like the amygdala and prefrontal cortex swiftly coordinate signals, <em>enhancing survival</em> by heightening awareness, focus, and resource mobilization. </p>
                            <p>Recognizing fear as a <em>protective mechanism</em> empowers individuals to manage and navigate it effectively.</p>
                        </div>
                        <Image className='sm:w-2/5 h-auto mx-auto' src={"/graphics/fear.svg"}  alt='A girl with an obvious expression of fear' width={484.69} height={516.39}/>
                    </div>
                    <GreenBox emotion={emotion} synonyms='Dread - Horror - Terror - Panic - Fright' />
                    <section>
                    
                        <h2>Zenful Tips</h2>
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
                    <Image className='w-28 h-auto mx-auto pt-16' alt="A person's flexed arm" src="/graphics/muscle.svg" width={150} height={159.03} />
                    <section>
                        <h2>Confronting fears and personal growth</h2>
                        <p>Confronting fears not only breaks barriers to personal development but also lights the path to authenticity, encouraging a life lived courageously. In this pursuit, individuals not only conquer specific fears but also uncover a deeper understanding of themselves, fostering a resilient spirit essential for sustained personal growth.</p>
                    </section>
                </>
            )
        case "surprise":
            return (
                <>
                    <div className='flex flex-col-reverse items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16 pt-16 mb-16 lg:mb-32'>
                        <div className='text-left'>
                            <p>Surprise is when unexpected things happen in life, like <em>challenges or good opportunities.</em></p>
                            <p>Dealing with these surprises helps us become stronger and better at solving problems. It&apos;s like <em>a way of learning and growing</em> from the unexpected events life throws at us.</p>
                            <p>Additionally, pleasant surprises can:</p>
                            <ul className={style.listFear}>
                                <li>Boost creativity by breaking normal routines</li>
                                <li>Make relationships stronger by the showcased thoughtfulness</li>
                                <li>Encourage the brain to release feel-good chemicals, making us happier</li>
                                <li>Create lasting memories</li>
                            </ul>

                        </div>
                        <Image className='w-4/5 h-auto mx-auto' src={"/graphics/surprise.svg"}  alt='A girl with her hand on her mouth looking surprised' width={613.996} height={860.998}/>
                    </div>
                    <GreenBox emotion={emotion} synonyms='Shock - Startle - Atonishment - Amazement - Unexpectedness' />
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
                <div className='pt-16'>
                    <p>Sadness is a primary emotion with various possible causes.</p>
                    <p>It typically occurs as a <em>response to painful or upsetting situations</em> and events, as well as a reaction to loss of an object or opportunity.</p>
                    <p>This emotion can serve as a <em>beneficial force</em>, motivating individuals to seek comfort and support, and encouraging development of empathy and resilience. </p>
                    <p>You might&apos;ve heard of depression - a common but serious psychological disorder, described by intense recurrent or persistent feelings of sadness and hopelessness that interfere with daily living. </p>
                    <p>It&apos;s crucial to <em>distinguish sadness and depression</em> to be able to express yourself accurately and find appropriate assistance.</p>
                    <p>Explore the infographic below for some insights.</p>
                </div>
                <Image priority src={"/graphics/sadness.png"} alt='Infographic of sadness versus depression' width={1340} height={975} />
                <GreenBox emotion={emotion} synonyms='Melancholy - Dissapointment - Despair - Sorrow - Misery' />
                <section className='max-w-screen-md mx-auto'>
                    <h2 className='lg:py-8'>Zenful Tips</h2>
                    <p>One effective approach to managing uncomfortable or unpleasant emotions is to keep in mind the word PATH.  PATH stands for:</p>
                    <div className=''>
                        <ol className={style.bigNumbersList}>
                            <li>
                                <span>1</span>
                                <div>
                                    <span className={style.sadPoints}>
                                        Pause
                                    </span>
                                    <p>
                                    Stop for a moment. Instead of acting on your feelings right away, give yourself time. You can count to 100 or say the alphabet backward.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>2</span>
                                <div>
                                    <span className={style.sadPoints}>
                                    Acknowledge
                                    </span>
                                    <p>
                                     What You&apos;re Feeling Understand your feelings. Are you mad at someone or sad because your feelings were hurt? It&apos;s okay to feel the way you do.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>3</span>
                                <div>
                                    <span className={style.sadPoints}>
                                    Think
                                    </span>
                                    <p>
                                    Now that you know what you&apos;re feeling, think about how you can make yourself feel better.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>4</span>
                                <div>
                                    <span className={style.sadPoints}>
                                    Help
                                    </span>
                                    <p>
                                     Take action to help yourself based on what you thought about in the &quot;Think&quot; step.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
                </>
            )
        case "disgust":
            return(
                <>
                <div className='flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16 mt-16'>
                    <Image className='w-4/5 h-auto mx-auto' src={"/graphics/disgust.svg"}  alt='A man covering her nose' width={443.038} height={629.835}/>
                    <div className='text-left'>
                        <p>Based on Robert Plutchik&apos;s Wheel of Emotions, disgust is a primal emotion linked to <em>self-preservation.</em></p>
                        <p>Disgust is a feeling of dislike or desire to avoid something perceived repulsive, contaminated, dirty or toxic. It&apos;s a natural response that <em>helps living things avoid harm from germs or diseases.</em> </p>
                        <p>This emotion is part of the &quot;behavioral immune system&quot;, prompting increased caution in the face of potential contact with harmful pathogens.</p>
                    </div>
                </div>
                <section className='py-16'>
                    <p>Although they are personal and vary between individuals, some causes of disgust can include:</p>
                    <ul className={style.normalList}>
                        <li>Animals, food and drink items</li>
                        <li>Discussions of topics related to social taboos</li>
                        <li>Bodily fluids or injuries</li>
                    </ul>
                </section>
                <GreenBox emotion={emotion} synonyms='Distaste - Antipathy - Repugnance - Abhorrence - Repulsion' />
                <section>
                    <Image className='w-28 h-auto mx-auto pt-16' alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                    <h2>ZenZone Wisdom Corner</h2>
                    <ul className={style.normalList}>
                            <li>Accepting things we dislike can reduce stress reactions.</li>
                            <li>Acknowledging disgusting things without intense struggle frees up mental space.</li>
                            <li>Avoiding intense struggle against dislikes, like insects or injuries, can be beneficial.</li>
                            <li>Choosing acceptance, rather than fighting, minimizes the impact of disgust.</li>
                            <li>Practicing feeling disgusted without resistance becomes more achievable with time and practice.</li>
                    </ul>
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
                        <p>Anger, a universal fundamental emotion, arises as a <em>reaction to obstacles or challenges.</em></p>
                        <p>People who are angry may feel a desire to confront or even eliminate the cause of their anger.</p>
                        <p>The emotion is natural, organic, and can be constructive - motivating individuals to address the encountered hurdles. </p>
                        <p>However, <em>excessive and uncontrolled anger can adversely impact daily functions</em>, relationships, interactions, and even pose a threat to mental and/or physical health.</p>
                    </div>
                </div>
                <GreenBox emotion={emotion} synonyms='Fury - Rage - Wrath - Annoyance - Frustration'/>
                <section>
                    <h2>Here are some tips to help you control your anger</h2>
                  <ul className={style.angerTips}>
                    <li>
                        <Image alt='piece of a puzzle' src="/graphics/icon-silence.svg" width={179} height={179} />
                        <h4>Think Before You Speak</h4>
                        <ul className={style.normalList}>
                            <li>Pause and count to 100.</li>
                            <li>Repeat calming phrases like &quot;Take it easy.&quot;</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt="Pendulums colliding with each other" src="/graphics/icon-newton3.svg" width={128} height={128} />
                        <h4>Look for Consequences</h4>
                        <ul className={style.normalList}>
                            <li>Consider the impact.</li>
                            <li>Assess if a strong response is necessary.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Speech bubbles' src="/graphics/icon-talk.svg" width={150} height={135.32} />
                        <h4>Communicate with Others</h4>
                        <ul className={style.normalList}>
                            <li>Talk openly about frustrations.</li>
                            <li> Understand intentions to prevent repeat actions</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Cup of hot coffee with a clock' src="/graphics/icon-tea.svg" width={150} height={150} />
                        <h4>Take a Short Break</h4>
                        <ul className={style.normalList}>
                            <li>Nap or take a walk when angry.</li>
                            <li>Return for a more rational perspective.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Lotus flower' src="/graphics/icon-lotus.svg" width={132} height={132} />
                        <h4>Take Deep Breaths</h4>
                        <ul className={style.normalList}>
                            <li>Practice deep breathing.</li>
                            <li>Calm your body and regain control.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Magnifying glass' src="/graphics/icon-find.svg" width={150} height={150} />
                        <h4>Identify Triggers</h4>
                        <ul className={style.normalList}>
                            <li>Know what makes you angry.</li>
                            <li>RWork on preventing it in similar situations.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt='Icon of people' src="/graphics/icon-people.svg" width={158} height={158} />
                        <h4>Talk with Friends or Seek Professional Help</h4>
                        <ul className={style.normalList}>
                            <li>Share feelings with friends.</li>
                            <li>Seek professional help for relief.</li>
                        </ul>
                    </li>
                    <li>
                        <Image alt="Human hands holding a heart." src="/graphics/icon-handheart.svg" width={132} height={132} />
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
                <><div className='flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 md:gap-16 pt-16'>
                     <Image className='w-4/5 h-auto mx-auto' src={"/graphics/anticipation.svg"} alt='A boy on a lader trying to reach the stars' width={517} height={618} />
                    <div className='text-left'>
                        <p>Anticipation is the feeling when you <em>expect something</em> in the future. </p>
                        <p>It can bring <em>suspense, excitement, anxiety, or other emotions</em> . Anticipatory concerns are the thoughts that come up during anticipation. Balancing living in the present and planning for the future is important for a fulfilling life.</p>
                        <p>While planning provides direction, too much focus can take away from present joys. On the other hand, only living in the present may hinder future goals.</p>
                        <p>Finding this balance means <em>enjoying the current moments while responsibly planning for the future</em> —a mindful dance between the now and what lies ahead.</p>
                    </div>
            </div>
            <GreenBox emotion={emotion} synonyms='Expectation - Prediction - Hope - Suspense - Awaiting' />
                    
                    <section>
                    <Image className='w-28 h-auto mx-auto pt-16' alt='Smiley emoji' src="/graphics/generic-face.svg" width={140.143} height={139.163} />
                        <h2>Zenful Tips</h2>
                        <ul className={style.bulletList}>
                            <div>
                                <li>Reduce anxiety with intentional deep breathing, focusing on breath sensations to stay present.</li>
                                <li>Scan your body and release any stress and tension you may be feeling.</li>
                                <li>Cultivate awareness to break the cycle of worry and anticipate thoughts non-judgmentally.</li>
                                <li>Stay present by using senses to anchor yourself in reality.</li>
                                <li>Focus on each step and body sensations during a mindful walk to be present.</li>
                            </div>
                            <div>
                                <li>Counter negative thoughts by visualizing positive outcomes.</li>
                                <li>Shift focus from stressors with calming guided imagery recordings.</li>
                                <li>Embrace uncertainty by acknowledging and accepting that some external factors cannot be controlled.</li>
                                <li>Reduce anticipatory stress by mindfully savouring each bite during meals.</li>
                                <li>Shift perspective by reflecting on positive aspects of life through gratitude.</li>
                            </div>
                        </ul>
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
            <Link key={index} className={style.hover} href={`/emotions/${emotionRandom.name}`}>
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
                <Link key={index} className={`flex flex-col items-center p-8 ${style.card} bg-light-green gap-8 w-80`} href={video.url} target='_blank'>
                    <Image alt='Watch the video' src={"/graphics/icon-play.svg"} width={100} height={100} />
                    <h4 className='text-center'>{video.title}</h4>
                </Link>
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
                <section className='mb-32 py-24'>
                    <h2 className='text-center mb-24'>Related Videos</h2>
                    <div className='flex gap-16 px-10 flex-wrap justify-center'>
                        {videos}
                    </div>
                </section>
                <section className='px-10 mb-16 pt-8 pb-32'>
                    <h2 className='mb-24 text-center'>Explore other moods</h2>
                    <div className='flex gap-4 sm:gap-10 lg:gap-20 py-8 justify-center'>{otherEmotions}</div>
                </section>
            </div>
        )
    }
}