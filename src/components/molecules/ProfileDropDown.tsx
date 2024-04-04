"use client"
import React from 'react'
import * as LucideIcons from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const ProfileDropDown = () => {
    const iconNames = [
        LucideIcons.ChevronDown,
    ];
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger> {iconNames.map((Icon, index) => (
                    <span key={index}>
                        <Icon size="24" />
                    </span>
                ))}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ProfileDropDown