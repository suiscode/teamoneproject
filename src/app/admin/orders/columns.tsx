"use client";

import { OrderInterface } from "@/lib/interface";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<OrderInterface>[] = [
  {
    accessorKey: "car.name",
    header: "Car name",
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "user.firstName",
    header: "First name",
  },
  {
    accessorKey: "user.email",
    header: "User email",
  },

  {
    accessorKey: "duration.from",
    header: "Rent from",
  },
  {
    accessorKey: "duration.to",
    header: "Rent to",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
