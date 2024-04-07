import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface ChartCardProps {
    title: string,
    rate: number,
    value: number,
    icon: string
}

const ChartCard: React.FC<ChartCardProps> = ({ title, icon, rate, value }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden pt-2">

            <div className="flex">
                <div className="w-12 h-12 flex justify-start">
                    <Image src={icon} alt={title} width={40} height={40} className="rounded" />
                </div>
                <div className="flex justify-start flex-col ms-2">
                    <div className="text-base text-gray-500 font-semibold pb-3 pt-1">{title}</div>
                    <div className="flex flex-row">
                        <h1 className="text-gray-700 xl:text-2xl lg:text-lg md:text-lg sm:text-base font-semibold">{`$${rate}`}</h1>
                        <div className="ml-2 flex justify-center items-center">
                            <p className={value >= 0 ? 'text-sm text-green-500 font-semibold flex flex-row' : 'text-sm text-red-500 font-semibold flex flex-row'}>{Math.abs(value)}%
                                <span>
                                    {value >= 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ChartCard;
