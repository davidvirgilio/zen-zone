'use client'
import ReactGA from 'react-ga4';
import { use, useEffect } from 'react';


export default function Analytics(){
    useEffect(()=>{
        ReactGA.initialize('G-HNGR2YN2DN');
        ReactGA.send({hitType: "pageview", page: "/"})
    })
}