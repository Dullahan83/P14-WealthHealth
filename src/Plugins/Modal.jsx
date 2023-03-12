import React, { useEffect, useRef } from 'react'
import "./modal.css"



function Modal({ children, icon, show }) {
    const modalRef = useRef(null)
    function handleKeyPress(e) {
        if (e.code === "Escape" || e.key === "Escape") show(false)
    }
    function handleClick(e) {
        if (e.target.className === "modal-bg" || e.target.className === "close-modal") show(false)
    }
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keypress", handleKeyPress)
    }, [])
    return (
        <div className='modal-bg' onClick={handleClick}>
            <div className='modal-body' ref={modalRef}>
                {icon ? icon : <span className='close-modal' ></span>}
                {children ? children : <p>Employee Created</p>}
            </div>
        </div>
    )
}

export default Modal
