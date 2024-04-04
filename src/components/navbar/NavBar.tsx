import React from 'react'
import TransparentSearchBar from './TransparentSearchBar'
import NavIcons from './NavIcons'
import Profile from './Profile'

const NavBar = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-10 w-full mt-3">
            <TransparentSearchBar />
            <NavIcons />
            <Profile />
        </div>
    )
}

export default NavBar