import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Link from "next/link";

const Schedule = () => {
    return (
        <div className='px-4 py-12 sm:px-8 md:px-16 md:pb-16 flex flex-col gap-4 justify-center items-center bg-black text-white' id='Schedule'>
            <div className='flex flex-col justify-center items-center mb-4'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-black uppercase'>Programme Schedule</h2>
            </div>
            <div className="px-4 mx-8 flex justify-center items-center">
                <Carousel>
                    <CarouselPrevious className='w-8 h-8 lg:w-12 lg:h-12 bg-secondaryBg border-none hover:text-secondaryBg' />
                    <CarouselContent>
                        <CarouselItem className="flex justify-center items-center">
                            <Link href='/pdf/schedule.pdf' target="_blank">
                                <Image src='/images/schedule/schedule-01.jpg' width={700} height={512} alt='schedule1' />
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center">
                            <Link href='/pdf/schedule.pdf' target="_blank">
                                <Image src='/images/schedule/schedule-02.jpg' width={700} height={512} alt='schedule2' />
                            </Link>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext className='w-8 h-8 lg:w-12 lg:h-12 bg-secondaryBg border-none hover:text-secondaryBg' />
                </Carousel>
            </div>
        </div>
    )
}

export default Schedule