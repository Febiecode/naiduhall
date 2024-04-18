import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import EmployeeMasterTable from "../molecules/table/EmployeeMasterTable"

const MachineMaster = () => {
  return (
    <>
        <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <EmployeeMasterTable />
        </div>
      </div>
    </>
  )
}

export default MachineMaster