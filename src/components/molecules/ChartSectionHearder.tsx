import React from 'react'
import ChartMenu from './ChartMenu'

const ChartSectionHearder = () => {
    return (
        <>
            <div className="h-auto w-full col-span-5 flex flex-row justify-between">
                <div className='flex flex-col'>
                    <h1 className="text-base sm:text-sm md:text-base lg:text-lg xl:text-lg mb-2 font-semibold">Revenue</h1>
                    <p className="text-sm text-gray-500">Your Revenue This Year</p>
                </div>

                <div>
                    <ChartMenu />
                </div>
            </div>
        </>
    )
}

export default ChartSectionHearder