import React from 'react'
import DatePickerWithRange  from '../atoms/DatePickerWithRange'

const WelcomeSelectDate = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 h-20 w-[98%] mt-10 place-items-center">
                <div className="h-20 w-full col-span-5 flex flex-col justiify-center">
                    <h1 className="text-base sm:text-sm md:text-base lg:text-xl xl:text-2xl mb-2">Welcome Back</h1>
                    <p className="text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                </div>

                <div className='h-20 w-full  flex justify-end items-end col-span-7'>
                    <div className='me-2 mb-5'>
                        <DatePickerWithRange />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeSelectDate