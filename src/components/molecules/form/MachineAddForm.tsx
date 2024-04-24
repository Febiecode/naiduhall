"use client"

import { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import api from '../../../services/api'
import { Button } from "../../../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form"


import { Input } from "../../../components/ui/input"

import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert"


const formSchema = z.object({
    machineName: z.string().min(1, {
        message: "Enter a valid Machine Name",
    }),
    machineCode: z.string().min(1, {
        message: "Enter a valid Machine Code",
    }),
})

const MachineAddForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Set timeout to hide success alert after 3 seconds
        if (isSuccess) {
            const successTimer = setTimeout(() => {
                setIsSuccess(false);
            }, 3000); // 3 seconds
            return () => clearTimeout(successTimer);
        }

        // Set timeout to hide error alert after 3 seconds
        if (isError) {
            const errorTimer = setTimeout(() => {
                setIsError(false);
            }, 3000); // 3 seconds
            return () => clearTimeout(errorTimer);
        }
    }, [isSuccess, isError]);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            machineName: "",
            machineCode: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Make a POST request to the API endpoint with the form values
            const response = await api.post("Master/SaveMachineMas", values);

            // Handle success response
            console.log("Form submitted successfully:", response.data);
            setIsSuccess(true);
            // Optionally, you can show a success message or redirect the user
        } catch (error) {
            // Handle error response
            console.error("Error submitting form:", error);
            setIsError(true);
            // Optionally, you can show an error message to the user
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="machineName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Machine Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="machineCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Machine Code</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex text-left">
                    {isSuccess && (
                        <Alert variant="success">
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription>Form submitted successfully</AlertDescription>
                        </Alert>
                    )}
                    {isError && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>Failed to submit form. Please try again later.</AlertDescription>
                        </Alert>
                    )}
                </div>
                <div className="flex">
                    <Button type="submit" variant="secondary">Add</Button>
                </div>
            </form>
        </Form>
    )
}

export default MachineAddForm;
