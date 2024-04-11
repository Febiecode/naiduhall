import React from 'react';
import Image from 'next/image';
const TransparentSearchBar = () => {
    return (
            <div className="relative flex items-center">
           <Image src={require('../../../../public/search.svg')} alt='search'/>
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent ps-3 border border-none rounded-md py-2 w-full focus:outline-none focus:border-none"
            />

        </div>

        
    );
};

export default TransparentSearchBar;
