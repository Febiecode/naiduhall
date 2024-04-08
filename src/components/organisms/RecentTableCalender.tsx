import React from 'react'
import RecentProject from '../molecules/table/RecentProject'
import CalenderEvents from '../molecules/CalenderEvents'


const RecentTableCalender = () => {
  return (
    <>
        <div className="grid grid-cols-12 gap-4 w-[98%] mt-10 ">
        <div className="w-full col-span-8 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
          <RecentProject />
        </div>
        <div className="w-full col-span-4 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
          <CalenderEvents />
        </div>
      </div>
    </>
  )
}

export default RecentTableCalender