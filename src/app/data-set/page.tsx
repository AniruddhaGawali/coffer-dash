'use client';
import React, { useMemo } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  ColumnDef,
} from '@tanstack/react-table';

import dataSet from '../../../public/data.json';

function Dataset() {
  type DataSet = {
    end_year: string;
    intensity: number;
    sector: string;
    topic: string;
    insight: string;
    url: string;
    region: string;
    start_year: string;
    impact: string;
    added: string;
    published: string;
    country: string;
    relevance: number;
    pestle: string;
    source: string;
    title: string;
    likelihood: number;
  };

  const columns = useMemo<ColumnDef<DataSet>[]>(
    () => [
      {
        accessorFn: (row) => row.title,

        header: 'Title',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.sector,
        header: 'Sector',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.topic,
        header: 'Topic',
        cell: (row) => row.getValue(),
      },

      {
        accessorFn: (row) => row.insight,
        header: 'Country',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.region,
        header: 'Region',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.likelihood,
        header: 'Likelihood',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.impact,
        header: 'Impact',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.relevance,
        header: 'Relevance',
        cell: (row) => row.getValue(),
      },
      {
        accessorFn: (row) => row.pestle,
        header: 'Pestle',
        cell: (row) => row.getValue(),
      },
      // {
      //   accessorFn: (row) => row.source,
      //   header: 'Source',
      //   cell: (row) => row.getValue(),
      // },
      // {
      //   accessorFn: (row) => row.added,
      //   header: 'Added',
      //   cell: (row) => row.getValue(),
      // },
      // {
      //   accessorFn: (row) => row.published,
      //   header: 'Published',
      //   cell: (row) => row.getValue(),
      // },
      // {
      //   header: 'URL',
      //   accessorFn: (row) => row.url,
      //   cell: (row) => row.getValue(),
      // },
    ],
    []
  );

  const [data, setData] = React.useState<DataSet[]>(dataSet as DataSet[]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const [pagination, setPagination] = React.useState({
    pageIndex: 1,
    pageSize: 10,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <main>
      <h2>Dataset</h2>
      <table className="border-2">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-2">
              {headerGroup.headers.map((header) => (
                <th className="border-2" key={header.id}>
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
        </thead>{' '}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-2 p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}>
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}>
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
        {table.getRowCount().toLocaleString()} Rows
      </div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </main>
  );
}

export default Dataset;
