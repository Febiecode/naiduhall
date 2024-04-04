import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import Efficiency from '@/components/Efficiency/Efficiencycomponents'

const page = () => {
    return (
        <div className="layout">
            <Sidebar />
            <Efficiency />
        </div>
    )
}

export default page