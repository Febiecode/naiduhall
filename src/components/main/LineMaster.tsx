"use client"
import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import LineMasterTable from '../molecules/table/LineMasterTable';
import { withAuth } from '../../utils/auth';

const LineMaster = () => {
  return (
    <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <LineMasterTable />
        </div>
      </div>
  )
}

export default withAuth(LineMaster) 