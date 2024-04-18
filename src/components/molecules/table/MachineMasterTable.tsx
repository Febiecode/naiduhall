"use client"

import * as React from "react"

import MachineAddForm from "../form/MachineAddForm"
import MachineEditForm from "../form/MachineEditForm"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../ui/alert-dialog"


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
import { Badge } from "../../ui/badge"

const data: MasterTable[] = [
    {
        "id": 1,
        "MachineName": "Website Redesign",
        "MachineCode": "M001",
        "modifiedDate": "2024-04-11T13:34:06.76",
        "modifiedBy": "Test User"
    },
    {
        "id": 2,
        "MachineName": "Marketing Campaign",
        "MachineCode": "M001",
        "modifiedDate": "2024-04-11T09:21:45.32",
        "modifiedBy": "MarketingTeam"
    },
    {
        "id": 3,
        "MachineName": "Product Launch",
        "MachineCode": "M001",
        "modifiedDate": "2024-04-11T16:58:22.09",
        "modifiedBy": "ProductManager"
    },
    {
        "id": 4,
        "MachineName": "Customer Survey",
        "MachineCode": "M001",
        "modifiedDate": "2024-04-11T11:47:33.78",
        "modifiedBy": "CustomerService"
    },
    {
        "id": 5,
        "MachineName": "Inventory Management System",
        "MachineCode": "M001",
        "modifiedDate": "2024-04-11T14:05:12.15",
        "modifiedBy": "InventoryTeam"
    },
]

export type MasterTable = {
    id: number
    MachineName: string
    MachineCode: string
    modifiedDate: string
    modifiedBy: string
}

export const columns: ColumnDef<MasterTable>[] = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "MachineName",
        header: "Machine Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("MachineName")}</div>
        ),
    },
    {
        accessorKey: "MachineCode",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost" className="ps-0 ms-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Machine Code
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("MachineCode")}</div>,
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
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {/* <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <Pencil2Icon className="h-4 w-4" />
                        </Button> */}
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <Pencil2Icon className="h-4 w-4" />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Edit Machine</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <MachineEditForm />
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                            </AlertDialogContent>
                        </AlertDialog>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.toString())}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]


const MasterTable = () => {
    const [filter, setFilter] = React.useState('');
    const [date, setDate] = React.useState<Date>()
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

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
                    <h1 className="text-lg font-semibold pe-5">Machine Master</h1>
                    <Badge variant="destructive">
                        <AlertDialog>
                            <AlertDialogTrigger>Add Machine</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Add Machine</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <MachineAddForm />
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                            </AlertDialogContent>
                        </AlertDialog>

                    </Badge>
                </div>
                <div className="flex items-center py-4">

                    <Input
                        placeholder="Filter Machine Name, Machine Code..."
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
                    {/* <div className="px-3">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[240px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}           
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select Due Date</span>}
                                
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div> */}
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
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
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

export default MasterTable