import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const filterMenuCategory = ['All', 'Income', 'Expense', 'Profit']

const Button = styled.button`
	color: '#883DCF';
	cursor: pointer;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 0.5rem;
	padding-top: 0.5rem;
    font-size: 14px;
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
        <div className='flex justify-center py-1 px-1 rounded-md border border-gray-300'>
            {filterMenuCategory.map((filterCategory, index) => (
                <ButtonToggle
                    key={index}
                    active={active === filterCategory}
                    onClick={() => handleButtonClick(filterCategory)}
                    className="hover:text-custom-purple hover:bg-primary-custom-purple"
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