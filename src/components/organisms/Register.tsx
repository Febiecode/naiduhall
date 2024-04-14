"use client"

import React from 'react'
import Link from 'next/link';

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

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email format.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});

const Register = () => {
    const profileImg = require('../../../public/profile.svg');
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className='min-h-screen flex flex-col'>
            <div className='container-fluid  mt-5 px-3'>
                <div className='flex justify-between'>
                    <div className=' w-full flex justify-between'>
                        <h1 className='text-xl font-bold items-center'>ERP Answers</h1>
                        <div className='flex items-center'>
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

                <div className="w-full flex flex-col items-center mt-20">
                    <div className=' xl:w-[30%] lg:w-[40%] sm:w-[95%] xxsm:w-[95%] flex flex-col justify-center bg-primary-custom-purple p-5 rounded-lg'>
                        <div className='flex flex-col items-center'>
                            {/* <Image src={require('../../../public/vercel.svg')} alt='naiduhall logo' width={100} height={100} className='my-5'/> */}

                            <h1 className='text-[30px] font-semibold my-2'>Product Logo</h1>

                            <h1 className='font-semibold text-xl my-2'>Get Starter with Naiduhall</h1>
                            <h1 className='text-gray-400 mb-5 text-sm'>Enter your personal infomation</h1>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className='bg-white p-5' placeholder="Enter Email" {...field} />
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
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormControl>
                                                <Input className='bg-white p-5' placeholder="Confirm Password" type='password' {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex justify-center">
                                    <Button className='w-full bg-custom-purple hover:bg-primary-custom-purple border border-custom-purple text-white hover:text-custom-purple font-semibold py-2 px-4 rounded-md' type="submit">Register</Button>
                                </div>
                            </form>
                        </Form>
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
}

export default Register