"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import {
    AlertDialogCancel,
    AlertDialogAction
} from "../../../components/ui/alert-dialog"
import { Input } from "../../../components/ui/input"

const formSchema = z.object({
    LineAssignName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const LineAssignAddForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            LineAssignName: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField 
                    control={form.control}
                    name="LineAssignName"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel className="flex justify-start">LineAssign Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-center items-center gap-4">
                    {/* <Button type="submit">Submit</Button> */}
                    <AlertDialogAction type="submit">Submit</AlertDialogAction>
                    <AlertDialogCancel className="xxsm:mb-2 lg:mb-0 md:mb-0">Cancel</AlertDialogCancel>
                </div>
            </form>
        </Form>
    )
}

export default LineAssignAddForm;
