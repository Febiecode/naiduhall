import React from 'react'
import Image from 'next/image';
const StatusCardTitle = () => {
    const icon = require('../../../../public/ellipsis-vertical.svg')
    return (
        <>
            <div className='w-full flex justify-between'>
                <div>
                    <h1 className='text-base sm:text-sm md:text-base lg:text-lg xl:text-lg mb-2 font-semibold'>All Projects</h1>
                    <p className='text-sm text-gray-500'>Based on Status</p>
                </div>
                <div>
                    <Image src={icon} alt="menuList" width={5} height={5} className="rounded" />
                </div>
            </div>
        </>
    )
}

export default StatusCardTitle