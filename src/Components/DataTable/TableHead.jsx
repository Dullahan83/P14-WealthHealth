import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TH = styled.th`
    padding: 10px 18px;
    span{
        margin-left: 15px;
        min-width: 20px;
    }
`


function TableHead({ th, globalFilterState, setGlobalFilterState, sort, sortCondition }) {
    const [isSorted, setIsSorted] = useState(false)
    const [isSortedDescendant, setIsSortedDescendant] = useState(true)
    // const [filter, setFilter] = useState("neutral")
    function handleClick() {
        setGlobalFilterState(th.accessor)

        setIsSorted(true)
        isSorted && setIsSortedDescendant(prev => !prev)
        !isSortedDescendant && setIsSorted(false)
        // sort(th.accessor, isSortedDescendant, isSorted)

    }
    useEffect(() => {
        // console.log("isSorted: ====>" + isSorted);
        // console.log("isSortedDesc: ====>" + isSortedDescendant);
        isSorted ? isSortedDescendant ? sortCondition(1) : sortCondition(-1) : sortCondition(0)
    }, [isSorted, isSortedDescendant])
    useEffect(() => {
        globalFilterState === th.accessor ? (setIsSorted(true), setIsSortedDescendant(true)) : (setIsSorted(false), setIsSortedDescendant(true))
    }, [globalFilterState])
    return (
        <TH onClick={handleClick}>{th.Header} <span>{isSorted ? isSortedDescendant ? "▾" : "▴" : "⇳"}</span></TH>
    )
}

export default TableHead
