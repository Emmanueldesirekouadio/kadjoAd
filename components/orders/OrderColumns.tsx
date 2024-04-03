"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "Commande",
    cell: ({ row }) => {
      return (
        <Link href={`/orders/${row.original._id}`} className='hover:text-red-1'>
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Clients",
  },
  {
    accessorKey: "products",
    header: "Produits",
  },
  {
    accessorKey: "totalAmount",
    header: "Total ($)",
  },
  {
    accessorKey: "createdAt",
    header: "Date de création",
  },
];
