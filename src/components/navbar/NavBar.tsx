import React, { useState } from 'react'
import TransparentSearchBar from './TransparentSearchBar'
import NavIcons from './NavIcons'
import Profile from './Profile'
import { Menu } from 'lucide-react'

import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import Sidebar from '../sidebar/SideBar'


const NavBar = () => {
    return (
        <div className="grid grid-cols-12 gap-4 h-10 w-[98%] mt-6 place-items-center">
            <div className=" flex items-center w-full col-span-5">
                <div className='lg:hidden xl:hidden md:block items-center'>
                    <Sheet >
                        <SheetTrigger><Menu size={30} className='me-3'/></SheetTrigger>
                        <SheetContent className="w-[250px] sm:w-[250px]">
                            <Sidebar />
                        </SheetContent>
                    </Sheet>

                </div>

                <div className='xxsm: hidden lg:block xl:block xxl:block'>
                <TransparentSearchBar />
                </div>
            </div>

            <div className='h-10 w-full  flex justify-end items-center col-span-7 xl:mx-4 '>
                <div className='lg:me-3 xl:me-5 xxsm: hidden lg:block xl:block xxl:block'>
                    <NavIcons />
                </div>
                <div>
                    <Image src={require('../../../public/Divider.svg')} alt='divider' />
                </div>
                <div className='lg:px-2'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default NavBar