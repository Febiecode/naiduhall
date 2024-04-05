import React from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface CardProps{
    title: string,
    icon: string,
    count: number,
    profit: number,
    todayStatus: number,
}

const Card: React.FC<CardProps> = ({ title, icon, count, profit, todayStatus }) => {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden mb-5">
      <div className="flex flex-row justify-between items-start px-4 py-4 ">
        <div className="flex flex-col justify-start">
          <h2 className="text-base text-gray-500 font-semibold mr-2">{title}</h2>
          <p className="text-3xl font-bold pt-3">{count}</p>
        </div>
        <Image src={icon} alt={title} width={40} height={40} className="rounded"/>
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-start">
        <p className={profit >= 0 ? 'text-sm text-green-500 font-semibold flex flex-row' : 'text-sm text-red-500 font-semibold flex flex-row'}>${profit}%
        <span>
        {profit >= 0 ? <ChevronUp size={20}  /> : <ChevronDown size={20}  />}
        </span>
        </p>
          <p className='text-sm ms-5 text-gray-400'>+${todayStatus} today</p>
        </div>
      </div>
    </div>
  );
};

export default Card;