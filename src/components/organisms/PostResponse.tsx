"use client"
import React, { useState } from 'react';
import ProfileWithStatus from '../../../src/components/atoms/ProfileWithStatus';
import NameRoleComponent from '../../../src/components/atoms/NameRole';

const PostResponse: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const [previousQuestions, setPreviousQuestions] = useState<string[]>(["What is Vue", "Is js single-threaded or multi-threaded", "Event Loop?"]);

    const handleSubmit = async () => {
        if (question.trim() === '') {
            // If empty, return without submitting
            return;
        }
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }

            const responseData = await response.json();
            // Simulate a response based on the user's question
            setResponse(responseData.title);

            // setPreviousQuestions(prevQuestions => [...prevQuestions, question]);

            setQuestion('');
        } catch (error) {
            console.error('Error:', error);
            setResponse('Sorry, something went wrong. Please try again later.');
        }
    };

    const profileImg = require('../../../public/profile.svg');

    return (
        <div className='min-h-screen flex flex-col'>
            <div className='container mx-auto flex-grow mt-5'>
                <div className='flex justify-between'>
                    <div className=' w-full flex justify-between'>
                        <h1 className='text-xl font-bold items-center'>ERP Answers</h1>
                        <div className='flex items-center'>
                            <ProfileWithStatus imageUrl={profileImg} online={true} />
                            <div className="lg:mx-3 xl:mx-5 md:mx-2 xxsm:ms-2">
                                <NameRoleComponent name="Jay Hargudson" role="" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-4 border-gray-300' />
                <div className='bg-primary-custom-purple rounded-lg p-4'>
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
                                className='bg-custom-purple hover:bg-primary-custom-purple border border-custom-purple text-white hover:text-custom-purple font-semibold py-2 px-4 rounded-md'
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                {response && (
                    <div className='mt-4 border border-custom-purple rounded-lg p-5 bg-primary-custom-purple'>
                        <div className='p-4'>{response}</div>

                    </div>
                )}

                {/* Separate div for previous questions */}
                <div className='mt-4 p-5 bg-primary-custom-purple rounded-lg'>
                    <h3 className='text-lg font-semibold mb-2'>Previous Questions</h3>
                    {previousQuestions.map((prevQuestion, index) => (
                        <div key={index} className='rounded-md border border-gray-300 my-2 bg-white p-2'>
                            {prevQuestion}
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer */}
            <div className="mt-auto border-t border-gray-300 bg-[#29363E] py-4 text-white">
                <div className="container mx-auto">
                    <div className="flex justify-between xxsm:flex-col lg:flex-row">
                        <h1><span className='font-semibold'>RapidSoft Solutions</span> @ 2024. All rights reserved</h1>
                        <div className="flex justify-between lg:mt-0 xxsm:mt-10">
                            <span className='px-2'>Terms</span>
                            <span className='px-2'>Privacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostResponse;