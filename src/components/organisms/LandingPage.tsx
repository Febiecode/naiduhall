"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "../../components/ui/button"
const LandingPage: React.FC = () => {
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
            <div className='container-fluif mt-5 '>
                <div className='flex justify-between'>
                    <div className=' w-full flex justify-between'>
                        <h1 className='text-xl font-bold items-center mx-5'>ERP Answers</h1>
                        <div className='flex items-center mx-5'>
                            <Link href="/login">
                                <Button className='bg-primary-custom-purple hover:bg-custom-purple border  text-custom-purple hover:text-white font-semibold py-2 px-4 rounded-md mx-2'>Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button className='bg-primary-custom-purple hover:bg-custom-purple border border-custom-purple text-custom-purple hover:text-white font-semibold py-2 px-4 rounded-md mx-2'>Register</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className='my-4 border-gray-300' />
                <div className="flex justify-center">
                <div className= 'w-[80%] bg-primary-custom-purple rounded-lg p-4'>
                    <div className='text-left'>
                        <h2 className='text-lg font-semibold'>Post Your Question</h2>
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className='w-full border border-gray-300 rounded-md px-3 py-2 mt-2'
                            placeholder='Type your question here...'></textarea>
                        <div className='flex justify-end mt-2'>
                            <Link href="/register">
                                <Button className='bg-primary-custom-purple hover:bg-custom-purple border border-custom-purple text-custom-purple hover:text-white font-semibold py-2 px-4 rounded-md mx-2'>Sign Up/ Sign In</Button>
                            </Link>
                            <Link href="#joinForum">
                                <Button
                                    onClick={handleSubmit}
                                    className='bg-custom-purple hover:bg-primary-custom-purple border border-custom-purple text-white hover:text-custom-purple font-semibold py-2 px-4 rounded-md'
                                >
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>

                <div className="min-h-screen bg-primary-custom-purple mt-5 flex flex-col justify-center items-center">
                    <div className='xl:w-[30%] lg:w-[30%] sm:w-[95%] xxsm:w-[95%] flex flex-col justify-center items-center'>
                    <h1 className=' text-[35px] font-semibold'>Join the forum</h1>
                    <p className='text-center my-5'>Post your question after login and get your answer from our experts. Its totally free.</p>
                    <Link href="/login">
                                <Button id='joinForum'
                                    onClick={handleSubmit}
                                    className='bg-custom-purple hover:bg-primary-custom-purple border border-custom-purple text-white hover:text-custom-purple font-semibold py-2 px-4 rounded-md'
                                >
                                    Sign Up Now
                                </Button>
                            </Link>
                    </div>

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

export default LandingPage;