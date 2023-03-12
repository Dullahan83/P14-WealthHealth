import React from 'react'
import styled from 'styled-components'

const TD = styled.td`
    padding: 8px 10px;
    border-top: inherit;
    border-bottom: inherit;
`

function TableCell({ data }) {
    const cellText = FormatDate(data)

    function FormatDate(valuePair) {
        if (valuePair[0].toLowerCase().includes("date")) {
            const date = new Date(valuePair[1]).toLocaleString("en-US", { month: "numeric", day: "numeric", year: "numeric" })
            return date
        }
        return valuePair[1]
    }
    return (
        <TD>{cellText}</TD>
    )
}

export default TableCell
