import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import WelcomeSelectDate from '../molecules/WelcomeSelectDate'
import CardsList from '../molecules/CardList'
import ChartSection from '../organisms/ChartSection'
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