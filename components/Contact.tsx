import React from 'react'
import { Phone, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <div className='bg-secondaryBg text-white px-4' id='Contact'>
            <div className='px-4 py-12 sm:px-8 md:px-16 md:pb-16 flex flex-col justify-center items-center gap-8 md:gap-12'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-black uppercase'>Contact</h2>
                <div className='flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 lg:gap-32'>
                    <div className='flex flex-col gap-3 border-l-2 pl-4'>
                        <h3 className='font-bold text-lg sm:text-xl md:text-2xl'>Dr Sakshi Shringi <span className='text-sm font-normal'>(Convener)</span></h3>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <a href='tel:+91-9649832226' className='flex justify-center items-center gap-2 text-sm sm:text-base'><Phone className='w-4 h-4 sm:w-6 sm:h-6' />+91-9649832226</a>
                            <a href='mailto:sakshi.shringi@jaipur.manipal.edu' className='flex justify-center items-center gap-2 text-sm sm:text-base'><Mail className='w-4 h-4 sm:w-6 sm:h-6' />sakshi.shringi@jaipur.manipal.edu</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 border-l-2 pl-4'>
                        <h3 className='font-bold text-lg sm:text-xl md:text-2xl'>Dr Shishir Singh Chauhan <span className='text-sm font-normal'>(Convener)</span></h3>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <a href='tel:+91-7905307175' className='flex justify-center items-center gap-2 text-sm sm:text-base'><Phone className='w-4 h-4 sm:w-6 sm:h-6' />+91-7905307175</a>
                            <a href='mailto:shishir.chauhan@jaipur.manipal.edu' className='flex justify-center items-center gap-2 text-sm sm:text-base'><Mail className='w-4 h-4 sm:w-6 sm:h-6' />shishir.chauhan@jaipur.manipal.edu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact