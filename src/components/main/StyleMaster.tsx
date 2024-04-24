"use client"
import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import StyleMasterTable from '../molecules/table/StyleMasterTable';
import { withAuth } from '../../utils/auth';

const StyleMaster = () => {
  return (
    <>

<div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <StyleMasterTable />
        </div>
      </div>


    </>
  )
}

export default withAuth(StyleMaster) 