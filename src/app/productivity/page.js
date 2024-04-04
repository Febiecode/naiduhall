import React from 'react'
import Sidebar from "../../components/sidebar/SideBar"
import Productivity from '@/components/Productivity/Productivitycomponents'

const page = () => {
    return (
        <div className="layout">
            <Sidebar />
            <Productivity />
        </div>
    )
}

export default page