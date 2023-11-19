'use client'
// import type { CustomFlowbiteTheme } from 'flowbite-react';
import Image from "next/image";
import { Flowbite, Navbar } from "flowbite-react";
import Link from "next/link";

// const customTheme: CustomFlowbiteTheme = {
//   navbar: {
//     root: {
//       base: '',
//       inner: {
//         base: "p-4 mx-auto flex flex-wrap items-center relative justify-between",
//         fluid: {
//           on: "",
//           off: "container"
//       }
//     }
//     },
//     collapse: {
//       base: "w-full md:block md:w-auto absolute top-14 left-0 z-10",
//       list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium bg-white",
//       hidden: {
//         on: "hidden",
//         off: ""
//       }
//     },
//     toggle: {
//       base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 md:hidden",
//       icon: "h-6 w-6 shrink-0"
//     },
//     link: {
//       base: "block py-2 px-4 md:p-0",
//       active: {
//         on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
//         off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
//       },
//     },
//     },
//   };

 export default function Header(){

  return(
    <header></header>
  )
    // return(
    //   <header>
    //     <Flowbite theme={{theme: customTheme}}>
    //       <Navbar fluid rounded>
    //         <Navbar.Brand as={Link} href="/">
    //         <Image
    //           src="/graphics/logo.svg"
    //           alt="Zen Zone Logo"
    //           width={118}
    //           height={44}
    //           className="sm:h-9"
    //           priority
    //           />
    //         </Navbar.Brand>
    //         <Navbar.Toggle />
    //         <Navbar.Collapse>
    //           <Navbar.Link href="/">
    //             Home
    //           </Navbar.Link>
    //           <Navbar.Link href="/for-me">
    //             For me
    //           </Navbar.Link>
    //           <Navbar.Link href="/for-a-friend">For a friend</Navbar.Link>
    //           <Navbar.Link href="/get-help">Get help</Navbar.Link>
    //           <Navbar.Link href="/resources">Resources</Navbar.Link>
    //         </Navbar.Collapse>
    //       </Navbar>
    //     </Flowbite>
    //   </header>
    // )
}