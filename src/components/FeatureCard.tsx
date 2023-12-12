import Image from 'next/image'
import React from 'react'

interface IFeatureCard {
    img: string
    title: string
    description: string
}
const FeatureCard = ({ img, title, description }: IFeatureCard) => {
    return (
        <div className='flex gap-8'>
            <Image className='h-[50px w-auto' src={img} width={60} height={50} alt={title}></Image>
            <div className='space-y-1'>
                <h2 className='font-medium text-xl uppercase'>{title}</h2>
                <p className='text-gray-600 text-[14px]'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard