import React from 'react'
import NavBar from '../navbar/NavBar'
import WelcomeSelectDate from '../molecules/WelcomeSelectDate'
import CardsList from '../molecules/CardList'
import ChartSection from '../molecules/ChartSection'
import RecentProject from '../organisms/RecentTableCalender'

const Dashboard = () => {
  return (
    <>
      
        <NavBar />
        <WelcomeSelectDate />
        <CardsList />
        <ChartSection />
        <RecentProject />

    </>
  )
}

export default Dashboard