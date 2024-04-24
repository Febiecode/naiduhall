"use client"

import React, {useState} from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form"

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import Image from 'next/image';
import Spinner from '../atoms/Spinner';

const formSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const profileImg = require('../../../public/profile.svg');
    const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        
        try {
            setIsSubmitting(true);
            const response = await axios.post('https://nh-dev.hostedapp.in/api/Login/Login', values);
            // Assuming the response contains session information like a token
            const { token } = response.data;

            // Store the token in local storage
            localStorage.setItem('token', token);

            // Redirect the user to the postResponse route
            router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure, maybe display an error message to the user
        }finally {
            setIsSubmitting(false); // Reset isSubmitting to false regardless of success or failure
        }
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <div className='container-fluid  mt-5 px-3'>
                <div className="w-full flex flex-col items-center mt-20">
                    <div className=' xl:w-[30%] lg:w-[40%] sm:w-[95%] xxsm:w-[95%] flex flex-col justify-center bg-primary-custom-purple p-5 rounded-lg'>
                        <div className='flex flex-col items-center'>
                            {/* <Image src={require('../../../public/vercel.svg')} alt='naiduhall logo' width={100} height={100} className='my-5'/> */}

                            <h1 className='text-[30px] font-semibold my-2'>Product Logo</h1>

                            <h1 className='font-semibold text-xl my-2'>Get Starter with Naiduhall</h1>
                            <h1 className='text-gray-400 mb-5 text-sm'>Welcome<span>&#33;</span> Let&apos;s get started<span>&#33;</span></h1>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className='bg-white p-5' placeholder="Enter Username" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormControl>
                                                <Input className='bg-white p-5' placeholder="Password" type='password' {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-center">
                                    <Button className='w-full bg-custom-purple hover:bg-primary-custom-purple border border-custom-purple text-white hover:text-custom-purple font-semibold py-2 px-4 rounded-md' type="submit">{isSubmitting ? <Spinner /> : "Login"}</Button>
                                </div>
                            </form>
                        </Form>
                        <div className='pt-5 flex w-full justify-center'>
                            <a href="/register">Not a User? <span className='text-custom-purple'>Sign Up</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login