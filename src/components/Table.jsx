import { useState } from "react";
import result from "../pages/data";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import Card from "./Card";
import Badge from "./Badge";

function Table() {

  const [data, _setData] = useState(result);
  const { accessor } = createColumnHelper();

  const columns = [
    accessor("title", {
      header: "Title",
      cell: info => <div className="flex items-center space-x-4 w-[24rem]">
        <Card src={info.row.original.imgUrl}/>
        <p>{info.getValue()}</p>
      </div>
    }),
    accessor("start_date", {
      header: "Start Date",
    }),
    accessor("end_date", {
      header: "End Date",
    }),
    accessor("price", {
      header: "Price",
      cell: info => <p>&#8377; {info.getValue()}</p>
    }),
    accessor("validity", {
      header: "Validity/Expiry",
    }),
    accessor("isPublished", {
      header: "Status",
      cell: info => info.getValue() ? <Badge value="Published" className="bg-[#DEFFDE] border-[#4ED04B]"/> : <Badge />
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getHeaderGroups())
  return (
    <table className="w-[70rem] rounded-[.5rem] mt-[2rem]">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <th key={header.id} className="py-[1.5rem] text-[#4B4747] text-left px-[1rem] font-bold ">
                        {header.column.columnDef.header}
                    </th>
                ))}
            </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-[1rem] py-[1.5rem] text-[#4B4747] font-semibold">
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
