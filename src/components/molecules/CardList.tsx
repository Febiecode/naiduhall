import React from "react";

import Card from "../atoms/Card";

const CardsList = () => {
    const cardsData = [
        { title: 'Total Project', icon: require('../../../public/ProjectBadge.svg'), count: 100, profit: 1000, todayStatus: 5000 },
        { title: 'In Progess', icon: require('../../../public/ProgressBadge.svg'), count: 150, profit: 1200, todayStatus: 6000 },
        { title: 'Finished', icon: require('../../../public/FinishedBadge.svg'), count: 200, profit: 1500, todayStatus: 7000 },
        { title: 'Unfinished', icon: require('../../../public/UnfinishedBadge.svg'), count: 180, profit: 1300, todayStatus: 6500 },
    ];

    return (

        <>
            <div className="grid grid-cols-12 gap-4 w-[98%] mt-10">
                <div className="w-full col-span-12 flex flex-wrap flex-row  xxsm:justify-center md:justify-around lg:justify-between xl:justify-between xxl:justify-between ">
                    {cardsData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>

        </>





    );
};

export default CardsList;