import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const filterMenuCategory = ['All', 'Income', 'Expense', 'Profit']

const Button = styled.button`
	color: '#883DCF';
	cursor: pointer;
	border-radius: 6px;
	&:disabled {
	color: grey;
	opacity: 0.7;
	cursor: default;
	}
	`;

const ButtonToggle = styled(Button) <{ active: boolean }>`
	opacity: 0.6;
	${({ active }) =>
        active && `
    color: #883DCF;
		font-weight: bold;
		opacity: 1;
	`}
	`;

function ToggleGrp() {
    const [active, setActive] = useState(filterMenuCategory[0]);

    const handleButtonClick = (filterCategory: string) => {
        setActive(filterCategory);
        console.log('Active:', filterCategory);
    };

    return (
        <div className='flex justify-center py-1 px-1 xxsm:py-0 xxsm:px-0 rounded-md border border-gray-300'>
            {filterMenuCategory.map((filterCategory, index) => (
                <ButtonToggle
                    key={index}
                    active={active === filterCategory}
                    onClick={() => handleButtonClick(filterCategory)}
                    className="hover:text-custom-purple hover:bg-primary-custom-purple px-3 py-2 m-1 xxsm:px-1 xxsm:py-1 xl:text-md lg:text-md md:text-base sm:text-base xxsm:text-base"
                >
                    {filterCategory}
                </ButtonToggle>
            ))}
        </div>
    );
}

const ChartMenu = () => {
    return (
        <>

            <section className='flex w-full items-center justify-between'>
                <ToggleGrp />
            </section>
        </>
    )
}

export default ChartMenu