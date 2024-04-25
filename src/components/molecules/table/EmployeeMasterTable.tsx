"use client"

import React, {useState, useEffect, ChangeEvent} from "react";

import EmployeeAddForm from "../form/EmployeeAddForm";
import EmployeeEditForm from "../form/EmployeeEditForm";

import api from '../../../services/api'



import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
    Pencil2Icon
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "../../ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import { Input } from "../../ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "../../../components/ui/dialog"
import { Badge } from "../../ui/badge"

export type EmployeeMaster = {
    id: number
    employeeName: string
    employeeCode: string
    modifiedDate: string
    modifiedBy: string
}

export const columns: ColumnDef<EmployeeMaster>[] = [

    {

        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    
    {
        accessorKey: "employeeName",
        header: "Employee Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("employeeName")}</div>
        ),
    },
    {
        accessorKey: "employeeCode",
        header: "Employee Code",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("employeeCode")}</div>
        ),
    },
    {
        accessorKey: "modifiedDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost" className="ps-0 ms-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modified Date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("modifiedDate")}</div>,
    },
    {
        accessorKey: "modifiedBy",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost" className="ps-0 ms-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modified By
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("modifiedBy")}</div>,
    },
    {
        id: "actions",
        header:"Action",
        enableHiding: false,
        cell: ({ row }) => {
            console.log(row.getValue(""))
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                         <Dialog>
                            <DialogTrigger asChild>
                            <Pencil2Icon className="h-4 w-4" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Edit Employee</DialogTitle>
                                    <DialogDescription>
                                        <EmployeeEditForm rowid={row.getValue("id")} employeeName={row.getValue("employeeName")} employeeCode={row.getValue("employeeCode")}/>
                                    </DialogDescription>
                                </DialogHeader>
                                {/* <DialogFooter className="sm:justify-start">
                                    
                                </DialogFooter> */}
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            )
        },
    },

]


const EmployeeMasterTable: React.FC = () => {
    const [filter, setFilter] = React.useState('');
    const [date, setDate] = React.useState<Date>()
    const [data, setData] = React.useState<EmployeeMaster[]>([]);

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/Master/GetEmployeeMas');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter: filter,
        },
        onGlobalFilterChange: setFilter,
    })

    const filteredRows = table.getRowModel().rows.filter(row => {
        // Assuming each row is an object with keys corresponding to column values
        return Object.values(row.original).some(value =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        );
    });



    return (
        <>
            <div className=" mt-20 w-[80%]">
                <div className="flex justify-between">
                    <h1 className="text-lg font-semibold pe-5">Employee Master</h1>
                    <Badge variant="destructive">

                        <Dialog>
                            <DialogTrigger asChild>
                                <button>Add Employee</button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Add Employee</DialogTitle>
                                    <DialogDescription>
                                        <EmployeeAddForm />
                                    </DialogDescription>
                                </DialogHeader>
                                {/* <DialogFooter className="sm:justify-start">
                                    
                                </DialogFooter> */}
                            </DialogContent>
                        </Dialog>
                    </Badge>
                </div>
                <div className="flex items-center py-4">

                    <Input
                        placeholder="Filter Employee Name, Employee Code, ModifiedDate, ModifiedBy ..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}

                        className="max-w-sm"
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {filteredRows.length ? (
                                filteredRows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected. */}
                        {table.getFilteredRowModel().rows.length} row(s) displayed.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeMasterTable