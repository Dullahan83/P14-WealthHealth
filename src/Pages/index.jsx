import React, { useState } from 'react'
import Dropdown from '../Plugins/Select.jsx'
import { states, departments } from "../Datas/datas"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import caretIcon from "../assets/icon.svg"
import EmployeeForm from '../Components/EmployeeForm/EmployeeForm.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import Modal from '../Plugins/Modal.jsx'
const icon = <FontAwesomeIcon icon={faCaretDown} />
const iconTest = <img src={caretIcon} style={{ width: "30px" }} />
function Index() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='wrapper'>
            <h1 className='title'>HRnet</h1>
            <div className='container'>
                <div className='headings'>
                    <NavLink to="/employeeList" >View Current Employees</NavLink>
                    <h2>Create Employee</h2>
                </div>
                <EmployeeForm setModalState={setShowModal} modalState={showModal} />
                {showModal && <Modal show={setShowModal} />}
            </div>
        </div>
    )
}

const defaultStyle = {
    general: {
        fontSize: "20px",
        width: "fit-content",
        minWidth: "200px",
        color: "#000",
        police: "Roboto",
    },
    button: {
        padding: "8px 16px",
        border: "1px solid grey",
        background: "#ededed"
    },
    options: {
        background: "white",
        border: "1px solid grey"
    },
    item: {
        hoverBgColor: "blue",
        color: "black",
        hoverTxtColor: "white"
    },
    icon: {
        color: "black",
        arrowSize: 10
    }
}
const style = {
    fontSize: "24px",
    width: "200px",
    minWidth: "300px",
    menuMaxHeight: "250px",
    color: "#000",
    labelMargin: "1rem 0 10px 0",
    labelFontSize: "18px",
    generalPadding: "8px 16px",
    buttonBorder: "1px solid grey",
    buttonBackground: "#ededed",
    optionsBorder: "1px solid grey",
    optionsBackground: "#fff",
    optionsItemHoverBgColor: "blue",
    optionsItemColor: "black",
    optionsItemHoverTxtColor: "white",
    arrowColor: "black",
    arrowSize: 10
}
export default Index
