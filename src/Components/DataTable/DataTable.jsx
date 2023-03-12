import React, { useEffect, useState } from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import './dataTable.css'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0;
`

function DataTable({ tHead, datas }) {
    const [tempData, setTempData] = useState(datas)
    const [filteredData, setFilteredDatas] = useState(tempData)
    const [globalFilterState, setGlobalFilterState] = useState("")
    const [descendant, setDescendant] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(10)
    const [sortCondition, setSortCondition] = useState(0)

    let pageCount = tempData.length ? tempData.length < itemPerPage ? 1 : Math.floor(tempData.length / itemPerPage) + 1 : 0
    const canPrevious = pageCount > 1 && currentPage != 1 ? true : false
    const canNext = pageCount > 1 && currentPage < pageCount ? true : false
    const handleChangePageSize = (e) => {
        setItemPerPage(e.target.value)
        setCurrentPage(1)
    }

    const handleNavigateToPage = (e) => {
        setCurrentPage(Number(e.target.value))

    }
    const handlePreviousPage = () => {
        setCurrentPage(prev =>
            prev -= 1
        )
    }
    const handleNextPage = () => {
        setCurrentPage(prev =>
            prev += 1
        )
    }
    const stylePageBtn = () => {
        console.log("hey")
        const btnPage = document.querySelectorAll(".pageBtn")
        btnPage.forEach((btn) => {
            btn.dataset.pagenumber == currentPage ? btn.classList.remove("transparent") : btn.classList.add("transparent")
        })
    }
    function FormatDate(valuePair) {
        if (valuePair[0].toLowerCase().includes("date")) {
            const date = new Date(valuePair[1]).toLocaleString("en-US", { month: "numeric", day: "numeric", year: "numeric" })
            console.log(typeof date)
            return date
        }
        return valuePair[1]
    }
    const filterDatas = (e) => {
        let array = []
        datas.map(row => {
            let toAdd = false
            Object.entries(row).map(field => {
                const fieldValue = FormatDate(field)
                if (fieldValue?.toLowerCase().includes(e.target.value.toLowerCase())) {
                    toAdd = true
                }

            })
            toAdd && array.push(row)
        })
        setTempData(array)
        setCurrentPage(1)
    }

    function sortData(filter, desc, sorted) {
        let newData
        // let newData = [...tempData].sort((a, b) => desc ? a[filter]?.toLowerCase() > b[filter]?.toLowerCase() ? 1 : -1 : a[filter]?.toLowerCase() < b[filter]?.toLowerCase() ? 1 : -1
        // )
        // console.log(filter, desc, sorted);
        // console.log(tempData)
        // !sorted && desc && setTempData(datas)
        // sorted && setTempData(newData)
        if (sortCondition === 1) {
            newData = [...tempData].sort((a, b) => a[filter]?.toLowerCase() > b[filter]?.toLowerCase() ? 1 : -1)
            setTempData(newData)
        }
        else if (sortCondition === -1) {
            newData = [...tempData].sort((a, b) => a[filter]?.toLowerCase() < b[filter]?.toLowerCase() ? 1 : -1)
            setTempData(newData)
        }
        else if (sortCondition === 0) {
            setTempData(datas)
        }
        setCurrentPage(1)
        // console.log("=============")
        // console.log(tempData);

    }
    useEffect(() => {
        sortData(globalFilterState)
    }, [sortCondition])
    useEffect(() => {
        setFilteredDatas(tempData.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage))
        stylePageBtn()
    }, [tempData, currentPage, itemPerPage])

    return (
        <>
            <div className='search'>
                <div>
                    <p>Show</p>
                    <select name="pageSize" id="pageSize" onChange={handleChangePageSize}>
                        {[10, 25, 50, 100].map((number, key) => {
                            return <option key={key}>{number}</option>
                        })}
                    </select>
                    <p>entries</p>
                </div>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" onChange={filterDatas} />
                </div>
            </div>
            <Table>
                <thead>
                    <tr>
                        {tHead && tHead.map((th, key) => {
                            return <TableHead th={th} key={key} sort={sortData} sortCondition={setSortCondition} setDescendant={setDescendant} globalFilterState={globalFilterState} setGlobalFilterState={setGlobalFilterState} />
                        })}
                    </tr>
                </thead>

                {<tbody>
                    {datas && filteredData.map((dataRow, key) => {
                        return <TableRow columns={tHead} key={key} dataRow={dataRow} format={FormatDate} />
                    })}
                    {!filteredData.length && <tr><td colSpan={tHead.length} className="noData">No data available in table</td></tr>}
                </tbody>}
            </Table>
            <div className='pagination'>
                <span>
                    Showing {filteredData.length ? currentPage > 1 ? itemPerPage * (currentPage - 1) + 1 : currentPage : currentPage - 1} to {filteredData.length > itemPerPage ? currentPage * itemPerPage : filteredData.length + itemPerPage * (currentPage - 1)} of {tempData.length} entries
                </span>
                <div className='pageNav'>

                    <button disabled={!canPrevious} onClick={handlePreviousPage} className="navBtn">Previous</button>
                    {
                        [...Array(pageCount)].map((i, key) => {
                            return <button key={key} onClick={handleNavigateToPage} className="pageBtn" data-pagenumber={key + 1} value={key + 1}>{key + 1}</button>
                        })
                    }
                    <button disabled={!canNext} onClick={handleNextPage} className="navBtn">Next</button>
                </div>
            </div>
        </>
    )
}

export default DataTable
