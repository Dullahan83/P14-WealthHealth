import React, { useMemo, useState } from 'react'
import { useFilters, useGlobalFilter, usePagination, useSortBy, useTable, useAsyncDebounce } from 'react-table'
import Search from './Search';
import "./table.css"

function Table({ column, datas }) {
    console.log(column);
    console.log(datas);
    const [filteredDatas, setFilteredDatas] = useState(datas)
    const data = React.useMemo(() => filteredDatas, [])
    const columns = React.useMemo(() => column, [])
    const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0 } }, useGlobalFilter, useSortBy, usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = tableInstance
    const { pageIndex, pageSize, globalFilter } = state
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    console.log(globalFilter)
    return (
        // apply the table props
        <div className='tableContainer'>
            <div className='search'>
                <div >
                    <p>Show</p>
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}

                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <p>entries</p>
                </div>
                <Search preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter} />
            </div>
            <table {...getTableProps()} >
                <thead style={{ border: "1px solid black" }}>
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {// Render the header
                                                column.render('Header')}
                                            <span className='indicator'>
                                                {/* Add a sort direction indicator */}
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? '▾'
                                                        : '▴'
                                                    : '⇳'}
                                            </span>
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        page.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <div className="pagination" >
                <span>
                    Showing {preGlobalFilteredRows.length ? pageIndex + 1 : pageIndex} to {preGlobalFilteredRows.length > pageSize ? pageSize : preGlobalFilteredRows.length} of {preGlobalFilteredRows.length} entries
                </span>
                <div className="pageNav">
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous
                    </button>{' '}
                    {[...Array(pageCount)].map((trash, key) => {
                        console.log(key)
                        return <button key={key} onClick={() => gotoPage(key + 1)}>{key + 1}</button>
                    })
                    }
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </button>{' '}
                </div>
            </div>
        </div>
    )
}

export default Table
