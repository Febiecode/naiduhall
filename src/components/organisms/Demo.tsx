"use client"
import React, { useState } from 'react';
import ProfileWithStatus from '../../../src/components/atoms/ProfileWithStatus'
import NameRoleComponent from '../../../src/components/atoms/NameRole'

const PostResponse: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }

            const responseData = await response.json();
            // Simulate a response based on the user's question
            setResponse(`${responseData.title}`);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Sorry, something went wrong. Please try again later.');
        }
    };

    const profileImg = require('../../../public/profile.svg')

    return (
        <div className='container mx-auto mt-8'>
            <div className='flex justify-between'>
                <div className=' w-full flex justify-between'>
                    <h1 className='text-xl font-bold items-center'>Title</h1>
                    <div className='flex items-center'>

                        <ProfileWithStatus imageUrl={profileImg} online={true} />


                        <div className="lg:mx-3 xl:mx-5 md:mx-2 xxsm:ms-2">
                            <NameRoleComponent name="Jay Hargudson" role="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-4 border-gray-300' />
            <div className='bg-gray-100 rounded-lg p-4'>
                <div className='text-left'>
                    <h2 className='text-lg font-semibold'>Post Your Question</h2>
                    <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className='w-full border border-gray-300 rounded-md px-3 py-2 mt-2'
                        placeholder='Type your question here...'></textarea>
                    <div className='flex justify-end mt-2'>
                        <button
                            onClick={handleSubmit}
                            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            {response && (
                <div className='mt-4 border border-blue-500 rounded-lg p-5 bg-[#F1F5F9]'>
                    <div className='p-4'>{response}</div>
                </div>
            )}
        </div>
    );
};

export default PostResponse;



