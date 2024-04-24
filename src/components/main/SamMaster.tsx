"use client"
import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import { withAuth } from '../../utils/auth';
import SamMasterTable from '../molecules/table/SamMasterTable';

const SamMaster = () => {
  return (
    <>

      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <SamMasterTable />
        </div>
      </div>
    </>
  )
}

export default withAuth(SamMaster) 