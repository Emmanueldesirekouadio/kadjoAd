"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderItemType>[] = [
  {
    accessorKey: "product",
    header: "Produit",
    cell: ({ row }) => {
      return (
        <Link
          href={`/products/${row.original.product._id}`}
          className='hover:text-red-1'
        >
          {row.original.product.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Couleur",
  },
  {
    accessorKey: "size",
    header: "Taille",
  },
  {
    accessorKey: "quantity",
    header: "Quantité",
  },
];
