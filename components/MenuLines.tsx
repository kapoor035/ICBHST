"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const MenuLines = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className='fixed left-0 z-20 p-2 hidden md:flex md:flex-col justify-start items-start gap-16 drop-shadow-xl'>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>About</div>
                </Link>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>Speakers</div>
                </Link>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>Schedule</div>
                </Link>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>Registration</div>
                </Link>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>Committee</div>
                </Link>
                <Link onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href='#Introduction' className='relative inline-block'>
                    <div className={ isHovered ? `py-[2px] px-8 bg-black transition duration-200` : `py-[1px] px-4 bg-black`}></div>
                    <div className={ isHovered ? 'opacity-100 transition-opacity duration-200 uppercase font-bold text-xl' : 'opacity-0'}>Contact</div>
                </Link>
            </div>
        </div>
    )
}

export default MenuLines