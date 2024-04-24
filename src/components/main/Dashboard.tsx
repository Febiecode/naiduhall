import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import WelcomeSelectDate from '../molecules/WelcomeSelectDate'
import CardsList from '../molecules/CardList'
import ChartSection from '../organisms/ChartSection'
import RecentProject from '../organisms/RecentTableCalender'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import { withAuth } from '../../utils/auth';

const Dashboard = () => {
  return (
    <>

      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <WelcomeSelectDate />
          <CardsList />
          <ChartSection />
          <RecentProject />
        </div>
      </div>
    </>
  )
}

export default withAuth(Dashboard) 