import React, { useState } from 'react'
import EmployeeForm from '../Components/EmployeeForm/EmployeeForm.jsx'
import { NavLink } from 'react-router-dom'
import Modal from '../Plugins/Modal.jsx'



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



// const style = {
//     fontSize: "24px",
//     width: "200px",
//     minWidth: "300px",
//     menuMaxHeight: "250px",
//     color: "#000",
//     labelMargin: "1rem 0 10px 0",
//     labelFontSize: "18px",
//     generalPadding: "8px 16px",
//     buttonBorder: "1px solid grey",
//     buttonBackground: "#ededed",
//     optionsBorder: "1px solid grey",
//     optionsBackground: "#fff",
//     optionsItemHoverBgColor: "blue",
//     optionsItemColor: "black",
//     optionsItemHoverTxtColor: "white",
//     arrowColor: "black",
//     arrowSize: 10
// }
export default Index
