import React from 'react'
import TransparentSearchBar from './TransparentSearchBar'
import NavIcons from './NavIcons'
import Profile from './Profile'

const NavBar = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-10 w-full mt-3">
            <TransparentSearchBar />
            <div className='h-10  flex justify-end items-center col-span-7 '>
                <div className=' lg:me-3'>
                    <NavIcons />
                </div>
                <div className='px-2'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default NavBar