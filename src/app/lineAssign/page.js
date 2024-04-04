import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import LineAssign from '@/components/LineAssign/LineAssigncomponents'

const page = () => {
    return (
        <div className="layout">
            <Sidebar />
            <LineAssign />
        </div>
    )
}

export default page