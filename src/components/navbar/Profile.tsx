import React, { useState } from 'react'
import ProfileWithStatus from '../atoms/ProfileWithStatus'
import NameRoleComponent from '../atoms/NameRole'

import * as LucideIcons from 'lucide-react';


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

        <ProfileWithStatus imageUrl={require('../../../public/profile.svg')} online={true} />
        

      <div className="lg:mx-3 xl:mx-5 md:mx-2 xxsm:ms-2">
        <NameRoleComponent name="Jay Hargudson" role="Manager" />
      </div>
      <div className="xl:ms-1">
      <ProfileDropDown />
      </div>
    </div>
  )
}

export default Profile