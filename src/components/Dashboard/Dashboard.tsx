import React from 'react'
import NavBar from '../navbar/NavBar'
import WelcomeSelectDate from '../molecules/WelcomeSelectDate'
import CardsList from '../molecules/CardList'

const Dashboard = () => {
  return (
    <>
       <div className="customMain">
       <NavBar />
       <WelcomeSelectDate />
       <CardsList />
       </div>
        
    </>
  )
}

export default Dashboard