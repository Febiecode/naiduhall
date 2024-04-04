import React, { useState } from 'react'
import ProfileWithStatus from '../atoms/ProfileWithStatus'
import NameRoleComponent from '../atoms/NameRole'

import * as LucideIcons from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import ProfileDropDown from '../molecules/ProfileDropDown';

const Profile = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const iconNames = [
    LucideIcons.ChevronDown,
    // 'bell',
    // 'mail',
  ];
  return (
    <div className='flex items-center'>
      <div>
        <ProfileWithStatus imageUrl={require('../../../public/profile.svg')} online={true} />
      </div>
      <div className="lg:ms-2 md:ms-1">
        <NameRoleComponent name="Jay Hargudson" role="Manager" />
      </div>
      <div className="lg:ms-2 md:ms-1">
      <ProfileDropDown />
      </div>
    </div>
  )
}

export default Profile