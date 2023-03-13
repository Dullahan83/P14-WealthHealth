import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TH = styled.th`
    padding: 10px 18px;
    span{
        margin-left: 15px;
        width: fit-content;
        min-width: 20px;
    }
`


function TableHead({ th, globalFilterState, setGlobalFilterState, sort, sortCondition }) {
    const [isSorted, setIsSorted] = useState(false)
    const [isSortedDescendant, setIsSortedDescendant] = useState(true)
    function handleClick() {
        setGlobalFilterState(th.accessor)

        setIsSorted(true)
        isSorted && setIsSortedDescendant(prev => !prev)
        !isSortedDescendant && setIsSorted(false)

    }
    function handleSwitch() {
        if (globalFilterState === th.accessor) {
            if (isSorted && isSortedDescendant) {
                sortCondition(1)
            }
            else if (isSorted && !isSortedDescendant) {
                sortCondition(-1)
            }
            else sortCondition(0)
        }
        else {
            sort(prev => !prev)
        }
    }

    useEffect(() => {
        handleSwitch()
    }, [isSorted, isSortedDescendant])
    useEffect(() => {
        globalFilterState === th.accessor ? (setIsSorted(true), setIsSortedDescendant(true)) : (setIsSorted(false), setIsSortedDescendant(true))
    }, [globalFilterState])
    return (
        <TH onClick={handleClick}>{th.Header} <span>{isSorted ? isSortedDescendant ? "▾" : "▴" : "⇳"}</span></TH>
    )
}

export default React.memo(TableHead)
