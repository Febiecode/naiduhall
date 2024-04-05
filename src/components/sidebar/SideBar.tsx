"use client";
import { useState } from "react";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  Target,
  Cog,
  FileCog,
  Bolt,
  Settings2Icon,
} from "lucide-react";
import SidebarItem from "./item";

import Image from 'next/image';

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Productivity",
    path: "/productivity",
    icon: Target,
  },
  {
    name: "Efficiency",
    path: "/efficiency",
    icon: Cog,
  },
  {
    name: "Process Master",
    path: "/processMaster",
    icon: FileCog,
  },
  {
    name: "Machine Master",
    path: "/machineMaster",
    icon: Bolt,
  },
  {
    name: "Line Assign",
    path: "/lineAssign",
    icon: Settings2Icon,
  },
  // {
  //   name: "Machine",
  //   path: "/settings",
  //   icon: Settings,
  //   items: [
  //     {
  //       name: "General",
  //       path: "/settings",
  //     },
  //     {
  //       name: "Security",
  //       path: "/settings/security",
  //     },
  //     {
  //       name: "Notifications",
  //       path: "/settings/notifications",
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <div className={`fixed top-0 left-0 h-screen w-64 text-gray-600 bg-white z-10 ${isOpen ? 'block' : 'hidden md:block'}`}>
      <div className="flex justify-between items-center md:hidden">
        <Image className="w-10 h-10 rounded-full" src={require('../../../public/profile.svg')} alt="Logo"/>
        {/* <button className="text-black focus:outline-none" onClick={toggleMenu}>
          <img src="./hamburger-menu.png" alt="hamburger-menu" />
        </button> */}
        Menu
      </div>
      <div className="hidden md:flex flex-col  space-y-10 w-full">
      <div className="flex justify-center">
      <Image className="w-20 h-20 " src={require('../../../public/next.svg')} alt="Logo"/>
      </div>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;