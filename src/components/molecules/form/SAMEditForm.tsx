"use client"

import React, { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { number, z } from "zod"

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
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons";
import api from '../../../services/api'
import { Input } from "../../../components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"

const formSchema = z.object({
  id: z.string(),
  samValue: z.string().min(1, {
    message: "Enter a valid SAM Value",
  }),
  styleNumber: z.string().min(1, {
    message: "Enter a valid Style Number",
  }),
  machineName: z.string().min(1, {
    message: "Enter a valid Machine Name",
  }),
  processName: z.string().min(1, {
    message: "Enter a valid Process Name",
  }),
  partName: z.string().min(1, {
    message: "Enter a valid Part Name",
  }),
})

interface FormEdit {
  id: string
  samValue: string
  styleNumber: string
  machineName: string
  processName: string
  partName: string
  modifiedDate: string
  modifiedBy: string
}

const SAMEditForm = () => {
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
      id: "",
      samValue: "",
      styleNumber: "",
      machineName: "",
      processName: "",
      partName: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      // Make a POST request to the API endpoint with the form values
      const response = await api.post("Master/SaveSAMMas", values);
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
          name="styleNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style Number</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="machineName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Machine Name</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Part Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="samValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SAM Value</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="processName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Process Name</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex text-left">
          {isSuccess && (
            <Alert variant="success">
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Form submitted successfully</AlertDescription>
            </Alert>
          )}
          {isError && (
            <Alert variant="destructive">
              <RocketIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Failed to submit form. Please try again later.</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="flex">
          <Button type="submit" variant="secondary">Edit</Button>
        </div>
      </form>
    </Form>
  )
}

export default SAMEditForm;
