import React from 'react'
// import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import DataTable from '../Components/DataTable/DataTable'
function EmployeeList() {
    const { employeeList } = useSelector(store => store)
    const column = [{ Header: "First Name", accessor: "firstName" }, { Header: "Last Name", accessor: "lastName" }, { Header: "Start Date", accessor: "startDate" }, { Header: "Department", accessor: "department" }, { Header: "Date of Birth", accessor: "dateOfBirth" }, { Header: "Street", accessor: "street" }, { Header: "City", accessor: "city" }, { Header: "State", accessor: "state" }, { Header: "Zip Code", accessor: "zipCode" }]
    const data = employeeList

    return (
        <div className='wrapper'>
            <h1 className='title'>Current Employee</h1>
            {employeeList && <DataTable tHead={column} datas={data} />}

            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList
