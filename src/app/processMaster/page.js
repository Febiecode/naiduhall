import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import ProcessMaster from '@/components/ProcessMaster/ProcessMastercomponents'

const page = () => {
    return (
        <div className="layout">
            <Sidebar />
            <ProcessMaster />
        </div>
    )
}

export default page