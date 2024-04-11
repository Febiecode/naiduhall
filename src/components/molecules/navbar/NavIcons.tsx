import React from 'react'
import * as LucideIcons from 'lucide-react';

import Image from 'next/image';
const NavIcons = () => {
  const iconNames = [
    LucideIcons.Calendar,
    LucideIcons.Bell,
    LucideIcons.Mail,
    // 'bell',
    // 'mail',
  ];
  return (

      <div className="flex items-center">
        {iconNames.map((Icon, index) => (
          <div key={index} className="relative lg:mx-3 xl:mx-5 md:mx-2">
            <Icon size="22" />
            {(index === 1 || index === 2) && (
              <span className="bg-primary-blue text-white rounded-full w-4 h-4 text-xs absolute -top-1 -right-1 flex justify-center items-center">
                5 {/* Replace this with your actual notification count */}
              </span>
            )}
            
          </div>
        ))}
        <Image src={require('../../../../public/usa.svg')} alt="Profile" className="w-9 h-9 rounded-full"/>
      </div>
  )
}

export default NavIcons