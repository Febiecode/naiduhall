import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import MachineMaster from '@/components/MachineMaster/MachineMastercomponents'

const page = () => {
    return (
        <div className="layout">
            <Sidebar />
            <MachineMaster />
        </div>
    )
}

export default page