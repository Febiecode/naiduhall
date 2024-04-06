import React from 'react'
import BarChart from '../atoms/charts/BarChart'
import ChartSectionHearder from '../molecules/ChartSectionHearder'


const ChartSection = () => {
  return (
    <>
        <div className="grid grid-cols-12 gap-4 w-[98%] mt-10 ">
                <div className="w-full col-span-7 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
                    <ChartSectionHearder />
                    <BarChart />
                </div>
                <div className="w-full col-span-5 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
                     
                </div>
            </div>
    </>
  )
}

export default ChartSection