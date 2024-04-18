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
  Menu
} from "lucide-react";
import SidebarItem from "./item";

import Image from 'next/image';
import NavIcons from "../navbar/NavIcons";

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
    name: "Employee Master",
    path: "/employeeMaster",
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


  return (

      <div className="sidebar ">
      
      <div className="flex flex-col w-full">
      <div className="flex justify-center">
      <Image className="w-20 h-20 " src={require('../../../../public/next.svg')} alt="Logo"/>
      </div>
        <div className="flex flex-col space-y-2 w-[300px]">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;