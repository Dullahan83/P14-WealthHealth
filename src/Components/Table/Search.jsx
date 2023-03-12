import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table';
import "regenerator-runtime"
function Search({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)

    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)
    return (
        <div className='searchBar'>
            <label htmlFor='search'>Search: </label>
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                id="search"
            />
        </div>
    )
}

export default Search
