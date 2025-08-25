import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import './Table.css';

interface DataItem {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
}

const columnHelper = createColumnHelper<DataItem>();

const TanStackTable: React.FC = () => {
  const data = useMemo<DataItem[]>(() => {
    return Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      col1: `Data ${index + 1}-1`,
      col2: `Data ${index + 1}-2`,
      col3: `Data ${index + 1}-3`,
      col4: `Data ${index + 1}-4`,
      col5: `Data ${index + 1}-5`,
      col6: `Data ${index + 1}-6`,
      col7: `Data ${index + 1}-7`,
      col8: `Data ${index + 1}-8`,
      col9: `Data ${index + 1}-9`,
      col10: `Data ${index + 1}-10`,
    }));
  }, []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('col1', {
        header: 'Column 1 (10%)',
        cell: (info) => info.getValue(),
        size: 10,
      }),
      columnHelper.accessor('col2', {
        header: 'Column 2 (10%)',
        cell: (info) => info.getValue(),
        size: 10,
      }),
      columnHelper.accessor('col3', {
        header: 'Column 3 (10%)',
        cell: (info) => info.getValue(),
        size: 10,
      }),
      columnHelper.accessor('col4', {
        header: 'Column 4 (8.75%)',
        cell: (info) => info.getValue(),
        size: 8.75,
      }),
      columnHelper.accessor('col5', {
        header: 'Column 5 (8.75%)',
        cell: (info) => info.getValue(),
        size: 8.75,
      }),
      columnHelper.accessor('col6', {
        header: 'Column 6 (8.75%)',
        cell: (info) => info.getValue(),
        size: 8.75,
      }),
      columnHelper.accessor('col7', {
        header: 'Column 7 (8.75%)',
        cell: (info) => info.getValue(),
        size: 8.75,
      }),
      columnHelper.accessor('col8', {
        header: 'Column 8 (8.75%)',
        cell: (info) => info.getValue(),
        size: 8.75,
      }),
      columnHelper.accessor('col9', {
        header: 'Column 9 (15%)',
        cell: (info) => info.getValue(),
        size: 15,
      }),
      columnHelper.accessor('col10', {
        header: 'Column 10 (15%)',
        cell: (info) => info.getValue(),
        size: 15,
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>TanStack Table Demo</h1>
        <p>Responsive table with percentage-based column widths and visible column lines</p>
      </div>
      
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      width: `${header.column.getSize()}%`,
                      minWidth: `${header.column.getSize()}%`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      width: `${cell.column.getSize()}%`,
                      minWidth: `${cell.column.getSize()}%`,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TanStackTable;
