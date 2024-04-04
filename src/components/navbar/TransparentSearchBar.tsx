import React from 'react';

const TransparentSearchBar = () => {
    return (

      
            <div className="relative h-10 col-span-5 lg:ms-4">
            <svg className=' h-6 w-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7801 17.7203L14.3033 13.2435C15.5233 11.7515 16.1231 9.84758 15.9787 7.92568C15.8343 6.00378 14.9567 4.21091 13.5275 2.9179C12.0983 1.62489 10.2268 0.930677 8.30007 0.978851C6.37336 1.02702 4.53886 1.8139 3.17605 3.17672C1.81323 4.53954 1.02635 6.37403 0.97818 8.30074C0.930006 10.2275 1.62422 12.099 2.91723 13.5282C4.21023 14.9574 6.00311 15.835 7.92501 15.9794C9.84691 16.1238 11.7508 15.524 13.2428 14.304L17.7196 18.7808C17.861 18.9174 18.0505 18.993 18.2471 18.9913C18.4438 18.9896 18.6319 18.9107 18.771 18.7716C18.91 18.6326 18.9889 18.4445 18.9906 18.2478C18.9923 18.0512 18.9167 17.8617 18.7801 17.7203ZM8.49984 14.5005C7.31315 14.5005 6.15311 14.1486 5.16642 13.4893C4.17972 12.83 3.41069 11.893 2.95656 10.7966C2.50243 9.70025 2.38361 8.49385 2.61512 7.32997C2.84664 6.16608 3.41808 5.09698 4.2572 4.25787C5.09631 3.41875 6.16541 2.84731 7.3293 2.6158C8.49318 2.38428 9.69958 2.5031 10.7959 2.95723C11.8923 3.41136 12.8294 4.18039 13.4887 5.16709C14.1479 6.15378 14.4998 7.31382 14.4998 8.50051C14.4981 10.0913 13.8653 11.6163 12.7405 12.7412C11.6157 13.866 10.0906 14.4987 8.49984 14.5005Z" fill="#4A4C56" />
            </svg>
            <input
                type="text"
                placeholder="Search..."
                className="bg-transparent ps-10 border border-none rounded-md py-2 px-4 w-full focus:outline-none focus:border-none"
            />

        </div>

        
    );
};

export default TransparentSearchBar;