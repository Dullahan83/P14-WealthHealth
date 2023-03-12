import React from 'react'

function InputField({ type, id, labelValue, className, children, state, setState }) {
    return (
        <div className={className}>
            <label htmlFor={id}>{labelValue}</label>
            <div>
                {children ? children : <input type={type} id={id} value={state} onChange={(e) => setState(e.target.value)} />}
            </div>
        </div>
    )
}

export default InputField
