import React from 'react'
import styled from 'styled-components'
import TableCell from './TableCell'

const TR = styled.tr`
`

function TableRow({ dataRow, columns, format }) {
    return (
        <TR >
            {columns.map((column, key) => {
                return Object.entries(dataRow).map((data) => {
                    if (column.accessor == data[0]) return <TableCell data={data} key={key} format={format} />
                })
            })
            }
        </TR>
    )
}

export default React.memo(TableRow)
