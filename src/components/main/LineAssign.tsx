import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import LineAssignTable from '../molecules/table/LineAssignTable';

const LineAssign = () => {
  return (
    <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="customMain">
          <NavBar />
          <LineAssignTable />
        </div>
      </div>
  )
}

export default LineAssign