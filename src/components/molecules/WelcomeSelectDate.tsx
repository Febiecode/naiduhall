import React from 'react'
import DatePickerWithRange  from '../atoms/DatePickerWithRange'

const WelcomeSelectDate = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 w-[98%] mt-10 place-items-center">
                <div className="h-20 w-full lg:col-span-5 xxsm:col-span-12 flex flex-col justify-center">
                    <h1 className="text-base sm:text-sm md:text-base lg:text-xl xl:text-2xl mb-2 font-semibold">Welcome Back</h1>
                    <p className="text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                </div>

                <div className='h-20 w-full  flex lg:justify-end items-end lg:col-span-7 sm:col-span-12 sm:justify-start'>
                    <div className='me-2 mb-5'>
                        <DatePickerWithRange />
                    </div>
                </div> 
            </div>
        </>
    )
}

export default WelcomeSelectDate