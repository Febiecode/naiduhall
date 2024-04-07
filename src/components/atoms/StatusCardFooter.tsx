import React from 'react'
import Image from 'next/image';
const StatusCardFooter = () => {
    const orangeDot = require("../../../public/orangeDot.svg")
    const greenDot = require("../../../public/greenDot.svg")
    const tomeDot = require("../../../public/tomeDot.svg")
    return (
        <>
            <div className='w-full flex flex-col'>
                <div className=' flex justify-between m-2'>
                    <div className=' flex'>
                        <Image src={orangeDot} alt="orangeDot" className="rounded" />
                        <p className='text-sm ms-3 text-gray-500'>In Progress</p>
                    </div>
                    <p>1400</p>
                </div>

                <div className='flex justify-between m-2'>
                    <div className=' flex'>
                        <Image src={greenDot} alt="greenDot" className="rounded" />
                        <p className='text-sm ms-3 text-gray-500'>Finished</p>
                    </div>
                    <p>600</p>
                </div>

                <div className=' flex justify-between m-2'>
                    <div className=' flex'>
                        <Image src={tomeDot} alt="tomeDot" className="rounded" />
                        <p className='text-sm ms-3 text-gray-500'>Unfinished</p>
                    </div>
                    <p>200</p>
                </div>
            </div>
        </>
    )
}

export default StatusCardFooter