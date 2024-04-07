import React from 'react'

import ChartCardList from './ChartCardList'
import ChartSectionHearder from '../molecules/ChartSectionHearder'
import BubbleChart from '../atoms/charts/BubbleChart'
import BarChart from '../atoms/charts/BarChart'
import StatusCardTitle from '../atoms/charts/StatusCardTitle'
import StatusCardFooter from '../atoms/charts/StatusCardFooter'


const progress = 50; // green
  const finished = 30; // red
  const unfinished = 20 //blue

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
          <StatusCardTitle />
          <BubbleChart progress={progress} finished={finished} unfinished={unfinished}/>
          <StatusCardFooter />
        </div>
      </div>
    </>
  )
}

export default ChartSection