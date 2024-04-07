import React from "react";
import ChartCard from "../atoms/charts/ChartCard";

const ChartCardList = () => {
    const cardsData = [
        { title: 'Income', icon: require('../../../public/income.svg'), rate: 26000, value: 10 },
        { title: 'Expense', icon: require('../../../public/expense.svg'), rate: 18000, value: -10 },
        { title: 'Profit', icon: require('../../../public/profit.svg'), rate: 8000, value: -10 }
    ];

    return (

        <>
            <div className="grid grid-cols-12 gap-4 w-[98%] my-3">
                <div className="w-full col-span-12 flex flex-wrap flex-row justify-between">
                    {cardsData.map((card, index) => (
                        <ChartCard key={index} {...card} />
                    ))}
                </div>
            </div>

        </>





    );
};

export default ChartCardList;