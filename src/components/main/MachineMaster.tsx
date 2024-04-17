import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import MachineMasterTable from "../molecules/table/MachineMasterTable"

const MachineMaster = () => {
  return (
    <>
        <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <MachineMasterTable />
        </div>
      </div>
    </>
  )
}

export default MachineMaster