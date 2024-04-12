import React from 'react'
import { speakers } from './constants'
import PhotoCard from './ui/photoCard'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Speakers = () => {

    const speakerGroups = speakers.reduce((groups: any[], speaker, index) => {
        if (index % 2 === 0) {
            groups.push([speaker]);
        } else {
            groups[groups.length - 1].push(speaker);
        }
        return groups;
    }, []);

    return (
        <div className='bg-[url(/images/bg/black-bg.webp)] bg-cover bg-no-repeat px-4 sm:px-8 py-12 md:p-16 xl:px-52 text-white' id='Speakers'>
            <div className='flex flex-col justify-center items-center gap-8 text-center'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-black uppercase'>Our Eminent Speakers</h2>
                <div className='hidden lg:flex justify-center items-center'>
                    <Carousel>
                        <CarouselPrevious className='w-12 h-12 bg-secondaryBg border-none hover:text-secondaryBg' />
                        <CarouselContent>
                            {speakerGroups.map((group: any[], index: number) => (
                                <CarouselItem key={index} className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center items-center'>
                                    {group.map((speaker: any, index: number) => (
                                        <PhotoCard key={index} profileimage={speaker.profileimage} fullName={speaker.fullName} des={speaker.des} />
                                    ))}
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className='w-12 h-12 bg-secondaryBg border-none hover:text-secondaryBg' />
                    </Carousel>
                </div>
                <div className='flex lg:hidden justify-center items-center px-4 mx-8'>
                    <Carousel>
                        <CarouselPrevious className='w-8 h-8 bg-secondaryBg border-none hover:text-secondaryBg' />
                        <CarouselContent>
                            {speakers.map((speaker, index: number) => (
                                <CarouselItem key={index} className='grid grid-cols-1 gap-1 justify-center items-center'>
                                        <PhotoCard key={index} profileimage={speaker.profileimage} fullName={speaker.fullName} des={speaker.des} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className='w-8 h-8 bg-secondaryBg border-none hover:text-secondaryBg' />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Speakers