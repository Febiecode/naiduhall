import React from 'react'
import TransparentSearchBar from './TransparentSearchBar'
import NavIcons from './NavIcons'
import Profile from './Profile'

import Image from 'next/image';

const NavBar = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-10 w-full mt-3">
            <TransparentSearchBar />
            <div className='h-10  flex justify-end items-center col-span-7 xl:mx-4 '>
                <div className='lg:me-3 xl:me-5'>
                    <NavIcons />
                </div>
                <div>
                <Image src={require('../../../public/Divider.svg')} alt='divider'/>
                </div>
                <div className='lg:px-2'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default NavBar