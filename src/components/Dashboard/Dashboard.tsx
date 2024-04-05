import React from 'react'
import NavBar from '../navbar/NavBar'
import WelcomeSelectDate from '../molecules/WelcomeSelectDate'

const Dashboard = () => {
  return (
    <>
       <div className="customMain">
       <NavBar />
       <WelcomeSelectDate />
       </div>
        
    </>
  )
}

export default Dashboard