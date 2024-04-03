"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Delete from "../custom ui/Delete";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Titre",
    cell: ({ row }) => (
      <Link href={`/products/${row.original._id}`} className='hover:text-red-1'>
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Categories",
  },
  {
    accessorKey: "collections",
    header: "Collections",
    cell: ({ row }) =>
      row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Prix ($)",
  },
  {
    accessorKey: "expense",
    header: "Depenses ($)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item='product' id={row.original._id} />,
  },
];
