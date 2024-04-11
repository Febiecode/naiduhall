import React from 'react'
import CalenderEvents from '../molecules/CalenderEvents'
import RecentTable from '../molecules/table/RecentTable'


const RecentTableCalender = () => {
  return (
    <>
        <div className="grid grid-cols-12 gap-4 w-[98%] mt-10 ">
        <div className="w-full xxsm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-8 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
          <RecentTable />
        </div>
        <div className="w-full xxsm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-4 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
          <CalenderEvents />
        </div>
      </div>
    </>
  )
}

export default RecentTableCalender