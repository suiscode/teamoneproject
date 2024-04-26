import { fetchAllOrder } from "@/app/fetch";
import { OrderInterface } from "@/lib/interface";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function DemoPage() {
  const data = await fetchAllOrder();

  /// data type carItem[]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data as any} />
    </div>
  );
}
