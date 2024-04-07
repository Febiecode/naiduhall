import React from 'react'
import BarChart from '../atoms/charts/BarChart'
import ChartSectionHearder from '../molecules/ChartSectionHearder'
import ChartCardList from './ChartCardList'


const ChartSection = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 w-[98%] mt-10 ">
        <div className="w-full col-span-8 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">
          <ChartSectionHearder />
          <ChartCardList />
          <BarChart />
        </div>
        <div className="w-full col-span-4 flex flex-wrap flex-row justify-between bg-white p-5 rounded-lg">

        </div>
      </div>
    </>
  )
}

export default ChartSection