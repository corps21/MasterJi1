import { useState } from "react";
import result from "../pages/data";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

function Table() {

  const [data, _setData] = useState(result);
  const { accessor } = createColumnHelper();

  const columns = [
    accessor("title", {
      header: "Title",
    }),
    accessor("start_date", {
      header: "Start Date",
    }),
    accessor("end_date", {
      header: "End Date",
    }),
    accessor("price", {
      header: "Price",
    }),
    accessor("validity", {
      header: "Validity/Expiry",
    }),
    accessor("isPublished", {
      header: "Status",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getHeaderGroups())
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,header.getContext())}
                    </th>
                ))}
            </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell,cell.getContext())}
                    </td>
                ))}
            </tr>
        ))}
      </tbody>
    </table>
  );
}



export default Table;
