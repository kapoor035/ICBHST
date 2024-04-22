import Image from 'next/image'
import React from 'react'

const CommitteeCard = ({ name, des, role, picture }: any) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-4'>
            <Image className='w-40 h-40 object-cover rounded-full border-[4px] border-secondaryBg' src={picture} alt={name} width={256} height={256} />
            <h4 className='bg-secondaryBg text-white px-2 py-1 font-bold -mt-5'>{name}</h4>
            <p>{role}</p>
            <p>{des}</p>
        </div>
    </div>
  )
}

export default CommitteeCard