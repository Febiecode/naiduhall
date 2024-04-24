"use client"
import React from 'react'
import NavBar from '../molecules/navbar/NavBar'
import ProcessTable from '../molecules/table/ProcessTable'
import Sidebar from "@/components/molecules/sidebar/SideBarcomponents";
import { withAuth } from '../../utils/auth';

const ProcessMaster = () => {
    return (
        <>
            <div className="layout">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="customMain">
                    <NavBar />
                    <ProcessTable />
                </div>
            </div>
        </>
    )
}

export default withAuth(ProcessMaster) 