"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


const menu = [
    {
        id: 1,
        label: 'About',
        link: '#Introduction',
    },
    {
        id: 2,
        label: 'Speakers',
        link: '#Speakers',
    },
    {
        id: 3,
        label: 'Schedule',
        link: '#',
    },
    {
        id: 4,
        label: 'Registration',
        link: '#',
    },
    {
        id: 5,
        label: 'Committee',
        link: '#',
    },
    {
        id: 6,
        label: 'Contact',
        link: '#',
    },
]

const Navbar = () => {
    return (
        <>
            <div className='sticky top-0 z-20 md:relative w-full gap-2 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 bg-white'>
                <div className='w-full flex flex-wrap justify-between items-center border-b-2'>
                    <Image className='w-44 sm:w-48 lg:w-60 p-2' src={'/images/logo/muj-logo.svg'} alt="CirCon'24" width={250} height={50} />
                    <Image className='hidden lg:block w-32 lg:w-36' src={'/images/logo/ministry-of-external-affairs-logo.png'} alt="Ministry Of External Affairs" width={150} height={50} />
                    <div className='flex justify-center items-center gap-4'>
                        <Image className='w-24 sm:w-28 lg:w-32' src={'/images/logo/viksit-bharat-logo.png'} alt="Viksit Bharat" width={150} height={50} />
                        <div className='flex md:hidden'>
                            <Sheet>
                                <SheetTrigger><Menu className='w-8 h-8' /></SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetDescription>
                                            <div className='flex flex-col justify-start items-start gap-8'>
                                                {menu.map((item) => (
                                                    <SheetClose asChild key={item.id}>
                                                        <Link href={item.link} className='font-semibold hover:underline transition-all'>{item.label}</Link>
                                                    </SheetClose>
                                                ))}
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <Image className='hidden lg:block w-24' src={'/images/logo/azadi-mahotsav-logo.png'} alt="Azadi Ka Amrit Mahotsav" width={100} height={50} />
                    <Image className='hidden lg:block w-40 lg:w-48' src={'/images/logo/sdg-horizontal-logo.png'} alt="Sustainable Development Goals" width={250} height={50} />
                </div>
            </div>
            <div className='sticky top-0 z-20 px-16 py-2 bg-white hidden md:flex justify-start items-center gap-8 drop-shadow-xl'>
                {menu.map((item) => (
                    <Link key={item.id} href={item.link} className='font-semibold hover:underline transition-all'>{item.label}</Link>
                ))}
            </div>
        </>
    )
}

export default Navbar


// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const menu = [
//     {
//         id: 1,
//         label: 'About',
//         link: '#Introduction',
//     },
//     {
//         id: 2,
//         label: 'Speakers',
//         link: '#Speakers',
//     },
//     {
//         id: 3,
//         label: 'Schedule',
//         link: '#',
//     },
//     {
//         id: 4,
//         label: 'Registration',
//         link: '#',
//     },
//     {
//         id: 5,
//         label: 'Committee',
//         link: '#',
//     },
//     {
//         id: 6,
//         label: 'Contact',
//         link: '#',
//     },
// ]

// const Navbar = () => {
//     return (
//         <>
//             <div className='w-full gap-2 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-2 bg-white'>
//                 <div className='w-full flex justify-between items-center'>
//                     <Image src={'/images/logo/muj-logo.svg'} alt="CirCon'24" width={200} height={50} />
//                     <Image src={'/images/logo/sdg-horizontal-logo.png'} alt="CirCon'24" width={250} height={50} />
//                     <Image src={'/images/logo/ministry-of-external-affairs-logo.png'} alt="CirCon'24" width={150} height={50} />
//                     <Image src={'/images/logo/azadi-mahotsav-logo.png'} alt="CirCon'24" width={80} height={50} />
//                     <Image src={'/images/logo/viksit-bharat-logo.png'} alt="CirCon'24" width={100} height={50} />
//                 </div>
//             </div>
//             <div className='sticky top-0 z-20 p-2 bg-white hidden md:flex justify-center items-center gap-4 drop-shadow-xl'>
//                 {menu.map((item) => (
//                     <Link key={item.id} href='#Introduction' className='uppercase font-bold text-[12px] px-4 py-2 hover:border hover:border-gray-800 text-white bg-secondaryBg hover:bg-white hover:text-black'>{item.label}</Link>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Navbar