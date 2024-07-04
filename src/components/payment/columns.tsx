import { ColumnDef } from "@tanstack/react-table";
import { CircleChevronDown } from "lucide-react";
import { CircleChevronUp } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  date: string;
  method: string;
  description: string;
  transactionId: string;
};

export const columns: ColumnDef<Payment>[] = [
  // this handle the row expands
  {
    id: "select",
    cell: ({ row }) => (
      <button onClick={() => row.toggleExpanded()}>
        {row.getIsExpanded() ? <CircleChevronDown /> : <CircleChevronUp />}
      </button>
    ),
  },
  //rest of the table columns
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
