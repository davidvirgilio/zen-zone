'use client'
import React from "react";
import style from "./Resources.module.css"
import curves from '@/app/ui/styles/curves.module.css'
import Image from "next/image";
import resources from "./resources.json"
import Link from "next/link";


function Phone({existPhone, phone}:{existPhone:boolean, phone: string}){
    if(existPhone){
        return(
            <a href={`tel:${phone}`} className="flex gap-4 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6945 14.7282C16.1697 16.3228 14.1138 17.1183 12.645 16.9857C10.639 16.8044 8.4562 15.7403 6.79926 14.5684C4.3637 12.8458 2.08229 10.1815 0.752875 7.35389C-0.186665 5.35589 -0.397467 2.89892 0.999944 1.07771C1.51675 0.404538 2.07662 0.0452839 2.91529 0.00335205C4.08037 -0.0533126 4.24357 0.613064 4.64364 1.65116C4.94171 2.42747 5.33951 3.21964 5.56165 4.02428C5.97758 5.52589 4.52351 5.58822 4.3399 6.81558C4.22657 7.58961 5.16384 8.62771 5.58771 9.17963C6.40472 10.2545 7.40538 11.1765 8.54347 11.9029C9.18948 12.3098 10.2299 13.043 10.9688 12.6384C12.1067 12.0151 12.0002 10.0965 13.5902 10.7458C14.4142 11.0813 15.2121 11.5652 15.9986 11.9891C17.2147 12.643 17.158 13.3207 16.6945 14.7282C17.0413 13.6765 16.3477 15.7799 16.6945 14.7282Z" fill="white"/>
                    </svg>
                </span>
                <span>{phone}</span>
            </a>
        )    
    } else{
        return null;
    }
}

function Location({exist, location}:{exist:boolean, location: string}){
    if(exist){
        return(
            <p>{location}</p>
        )    
    } else{
        return null;
    }
}
function Weekdays({exist, hours}:{exist:boolean, hours: string}){
    if(exist){
        return(
            <div className="flex justify-between w-full">
                <span>Weekdays</span>
                <span>{hours}</span>
            </div>
        )    
    } else{
        return null;
    }
}

function Online({exist, email, link}:{exist: boolean, email: string, link: string}){

    function LinkComponent(){
        return(
            <Link href={link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.54095 11.4541L5.22073 14.7743C4.81874 15.1623 4.28188 15.3791 3.72321 15.3791C3.16454 15.3791 2.62768 15.1623 2.22569 14.7743C2.02853 14.5779 1.87209 14.3446 1.76535 14.0876C1.65861 13.8306 1.60366 13.5551 1.60366 13.2768C1.60366 12.9985 1.65861 12.723 1.76535 12.466C1.87209 12.209 2.02853 11.9756 2.22569 11.7793L5.54591 8.45905C5.70705 8.29791 5.79757 8.07936 5.79757 7.85148C5.79757 7.6236 5.70705 7.40505 5.54591 7.24391C5.38477 7.08278 5.16622 6.99225 4.93834 6.99225C4.71046 6.99225 4.49191 7.08278 4.33078 7.24391L1.01055 10.5727C0.34168 11.3007 -0.0200662 12.259 0.000859782 13.2475C0.0217857 14.2359 0.423766 15.1781 1.12285 15.8771C1.82194 16.5762 2.76408 16.9782 3.75252 16.9991C4.74095 17.0201 5.69926 16.6583 6.42731 15.9894L9.75609 12.6692C9.91722 12.5081 10.0078 12.2895 10.0078 12.0617C10.0078 11.8338 9.91722 11.6152 9.75609 11.4541C9.59495 11.293 9.3764 11.2024 9.14852 11.2024C8.92064 11.2024 8.70209 11.293 8.54095 11.4541ZM15.8831 1.11691C15.1632 0.401523 14.1896 0 13.1747 0C12.1598 0 11.1862 0.401523 10.4663 1.11691L7.13756 4.43713C7.05778 4.51691 6.99449 4.61163 6.9513 4.71588C6.90812 4.82013 6.8859 4.93186 6.8859 5.04469C6.8859 5.15753 6.90812 5.26926 6.9513 5.37351C6.99449 5.47775 7.05778 5.57247 7.13756 5.65226C7.21735 5.73205 7.31207 5.79534 7.41632 5.83852C7.52056 5.8817 7.63229 5.90392 7.74513 5.90392C7.85796 5.90392 7.96969 5.8817 8.07394 5.83852C8.17819 5.79534 8.27291 5.73205 8.3527 5.65226L11.6729 2.33204C12.0749 1.94407 12.6118 1.72726 13.1704 1.72726C13.7291 1.72726 14.266 1.94407 14.668 2.33204C14.8651 2.52842 15.0216 2.76179 15.1283 3.01878C15.235 3.27576 15.29 3.55129 15.29 3.82956C15.29 4.10783 15.235 4.38336 15.1283 4.64035C15.0216 4.89733 14.8651 5.1307 14.668 5.32708L11.3477 8.6473C11.2675 8.72686 11.2039 8.8215 11.1604 8.92578C11.117 9.03006 11.0946 9.1419 11.0946 9.25487C11.0946 9.36784 11.117 9.47969 11.1604 9.58396C11.2039 9.68824 11.2675 9.78289 11.3477 9.86244C11.4273 9.94264 11.5219 10.0063 11.6262 10.0497C11.7305 10.0932 11.8423 10.1156 11.9553 10.1156C12.0683 10.1156 12.1801 10.0932 12.2844 10.0497C12.3887 10.0063 12.4833 9.94264 12.5629 9.86244L15.8831 6.53366C16.5985 5.8138 17 4.84015 17 3.82528C17 2.81041 16.5985 1.83676 15.8831 1.11691ZM5.73417 11.2658C5.81413 11.3451 5.90896 11.4079 6.01322 11.4505C6.11748 11.4931 6.22912 11.5146 6.34174 11.514C6.45435 11.5146 6.566 11.4931 6.67025 11.4505C6.77451 11.4079 6.86934 11.3451 6.9493 11.2658L11.1595 7.05565C11.3206 6.89452 11.4111 6.67597 11.4111 6.44809C11.4111 6.2202 11.3206 6.00166 11.1595 5.84052C10.9983 5.67938 10.7798 5.58886 10.5519 5.58886C10.324 5.58886 10.1055 5.67938 9.94435 5.84052L5.73417 10.0507C5.65396 10.1302 5.5903 10.2249 5.54686 10.3292C5.50341 10.4334 5.48105 10.5453 5.48105 10.6583C5.48105 10.7712 5.50341 10.8831 5.54686 10.9874C5.5903 11.0916 5.65396 11.1863 5.73417 11.2658Z" fill="white"/>
                </svg>
            </Link>
    )};


    function Email(){
            return(
                <a href={`mailto:${email}`} className="flex gap-4 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M14.3993 0H3.59982C1.61452 0 0 1.70943 0 3.81144V10.5139C0 12.6159 1.61452 14.3253 3.59982 14.3253H4.51867V18.0453C4.51867 18.2309 4.56985 18.4124 4.66593 18.5676C4.76201 18.7229 4.89882 18.845 5.05955 18.919C5.05955 18.919 5.57882 19.1887 6.0315 18.7437L10.5277 14.3253H14.4002C16.3855 14.3253 18 12.6159 18 10.5139V3.81144C17.9986 2.80088 17.6187 1.83216 16.9437 1.11768C16.2688 0.403196 15.3537 0.00126017 14.3993 0ZM13.1429 10.1308H4.85616C4.61747 10.1308 4.38857 10.0304 4.21979 9.85173C4.05102 9.67303 3.9562 9.43067 3.9562 9.17795C3.9562 8.92524 4.05102 8.68287 4.21979 8.50418C4.38857 8.32548 4.61747 8.22509 4.85616 8.22509H13.1429C13.3816 8.22509 13.6105 8.32548 13.7793 8.50418C13.9481 8.68287 14.0429 8.92524 14.0429 9.17795C14.0429 9.43067 13.9481 9.67303 13.7793 9.85173C13.6105 10.0304 13.3816 10.1308 13.1429 10.1308ZM13.1429 6.31937H4.85616C4.61747 6.31937 4.38857 6.21898 4.21979 6.04028C4.05102 5.86159 3.9562 5.61922 3.9562 5.36651C3.9562 5.1138 4.05102 4.87143 4.21979 4.69274C4.38857 4.51404 4.61747 4.41365 4.85616 4.41365H13.1429C13.3816 4.41365 13.6105 4.51404 13.7793 4.69274C13.9481 4.87143 14.0429 5.1138 14.0429 5.36651C14.0429 5.61922 13.9481 5.86159 13.7793 6.04028C13.6105 6.21898 13.3816 6.31937 13.1429 6.31937Z" fill="white"/>
                        </svg>
                    </span>
                    <span>{email}</span>
                </a>
        )};

    return (
        <div className="flex gap-4 items-center">
            {link && <LinkComponent />}
            {exist && <Email />}
        </div>
    )
}


function Cards(){

    const category = resources.map((section, index)=>{
        const arrayOfResources = section.list;
        const cards = arrayOfResources.map((resource, index)=>{
            return(
                <details key={index} className={` ${style.card} bg-zen text-white p-10 rounded-3xl text-left`}>
                    <summary className="flex justify-between items-center">
                        <span>{resource.name}</span>
                        <span className={style.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22" fill="none">
                                <path d="M0.000160431 3.63167L17.9168 21.5483L35.8335 3.63167L32.6533 0.451464L17.9168 15.1879L3.18037 0.451463L0.000160431 3.63167Z" fill="white"/>
                            </svg>
                        </span>
                    </summary>
                    <div className={style.content}>
                        <p>{resource.description}</p>
                        <Location exist={resource.location ? true : false} location={resource.location} />
                        <Weekdays exist={resource.weekdays ? true : false} hours={resource.weekdays} />
                        <Phone existPhone={resource.tel ? true : false} phone={resource.tel} />
                        <div className="flex justify-between items-start gap-8">
                            <div className="flex flex-col gap-8">
                               {resource.details && <p>{resource.details}</p>}
                                <Online exist={resource.email ? true : false} email={resource.email ? resource.email : ""} link={resource.link}/>
                            </div>
                            <div className="flex flex-cols gap-8">

                            </div>
                        </div>
                    </div>
                </details>

            )
        })
        return(
            <section key={index} className="flex flex-col gap-8 flex-wrap justify-center mb-16">
                <h2>{section.category}</h2>
                <div className="flex flex-wrap gap-8 justify-center items-start">{cards}</div>
            </section>
        )
    });
    return(
        <div className="flex flex-col gap-8">{category}</div>
    )
}

export default function Page(){
    return(
        <main>
            <div className="px-10 text-center lg:pt-28 py-16 mx-auto">
                <h1 className="text-center mb-16">Resources Catalogue</h1>
                <p className="mb-24 w-4/5 mx-auto">Your well-being is important, and there are resources available to support you. You&apos;re not alone, and taking that first step can make a significant difference in your journey toward healing.</p>
                <Cards />
            </div>
            <div className={`${curves.curve} ${curves.curveResources}`}>
                <Image className={`mx-auto w-3/5 sm:w-2/5 relative`} alt="Illustration of a hand holding a smartphone with notification's icons around" src="./graphics/illustration-resources.svg" width={458} height={488}/>
            </div>
        </main>
    )
}