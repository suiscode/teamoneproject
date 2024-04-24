"use client";

import { Button } from "@/components/ui/button";
import { OrderInterface } from "@/lib/interface";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<OrderInterface>[] = [
  {
    accessorKey: "car.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Car name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    id: "firstname",

    accessorKey: "user.firstName",
    header: "First name",
  },
  {
    id: "pickuplocation",

    accessorKey: "pickupLocation",
    header: "Pick up",
  },
  {
    id: "droplocation",

    accessorKey: "dropLocation",
    header: "Drop off",
  },

  {
    id: "duration.from",
    accessorKey: "duration.from",
    header: "Rent from",
    cell: ({ row }) => {
      const dateString = row.getValue("duration.from");

      if (typeof dateString !== "string") {
        return <div className="text-right font-medium">Invalid date</div>;
      }

      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return <div className="text-right font-medium">Invalid date</div>;
      }

      const formatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(date);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "duration.to",
    accessorKey: "duration.to",
    header: "Rent to",
    cell: ({ row }) => {
      const dateString = row.getValue("duration.to");

      if (typeof dateString !== "string") {
        return <div className="text-right font-medium">Invalid date</div>;
      }

      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return <div className="text-right font-medium">Invalid date</div>;
      }

      const formatted = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(date);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
