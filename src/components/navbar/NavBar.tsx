import React from 'react'
import TransparentSearchBar from './TransparentSearchBar'
import NavIcons from './NavIcons'
import Profile from './Profile'

import Image from 'next/image';

const NavBar = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-10 w-[98%] mt-3 place-items-center">
            <div className="h-10 w-full col-span-5">
            <TransparentSearchBar />
            </div>
            
            <div className='h-10 w-full  flex justify-end items-center col-span-7 xl:mx-4 '>
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