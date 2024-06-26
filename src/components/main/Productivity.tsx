"use client"
import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import { withAuth } from '../../utils/auth';

const Productivity = () => {
  return (
    <>

<div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
        </div>
      </div>


    </>
  )
}

export default withAuth(Productivity) 