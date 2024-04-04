"use client"
import {useState,useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/sidebar/SideBar";
import Productivity from '@/components/Productivity/Productivitycomponents';
import Efficiency from '@/components/Efficiency/Efficiencycomponents';
import ProcessMaster from '@/components/ProcessMaster/ProcessMastercomponents';
import MachineMaster from '@/components/MachineMaster/MachineMastercomponents';
import LineAssign from '@/components/LineAssign/LineAssigncomponents';

export default function Home() {
  const [activeLabel, setActiveLabel] = useState('')
    const path = usePathname()
    let component = <Dashboard />

    useEffect(() => {
        switch (path) {
            case '/':
                setActiveLabel("Dashboard");
                component = <Dashboard />
                break
            case '/productivityReport':
                setActiveLabel("Productivity Report")
                component = <Productivity />
                break
            case '/efficiencyReport':
                setActiveLabel("Efficiency Report")
                component = <Efficiency />
                break
            case '/processMaster':
                setActiveLabel("Process Master")
                component = <ProcessMaster />
                break
            case '/machineMaster':
                setActiveLabel("Machine Master")
                component = <MachineMaster />
                break
            case '/lineAssign':
                setActiveLabel("Line Assign")
                component = <LineAssign />
                break

            default:
                break
        }
    }, [])
  return (
    <>
      <div className="layout">
        <Sidebar />
        {component}
      </div>
    </>
  );
}
