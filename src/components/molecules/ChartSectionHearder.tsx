import React from 'react'
import ChartMenu from '../atoms/charts/ChartMenu'

const ChartSectionHearder = () => {
    return (
        <>
            <div className="h-auto w-full flex  xxsm:flex-col sm:flex-col justify-between md:flex-row lg:flex-row xl:flex-row xxl:flex-row">
                <div className='flex flex-col'>
                    <h1 className="text-base sm:text-sm md:text-base lg:text-lg xl:text-lg mb-2 font-semibold">Revenue</h1>
                    <p className="text-sm text-gray-500">Your Revenue This Year</p>
                </div>

                <div className='xxsm:my-2'>
                    <ChartMenu />
                </div>
            </div>
        </>
    )
}

export default ChartSectionHearder