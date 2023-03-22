import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { departments, states } from '../../Datas/datas'
import { addEmployee } from '../../features/User/hrSlice'
// import Select from '../../Plugins/Select'
import InputField from '../InputField/InputField'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-customizable-select'

function EmployeeForm({ modalState, setModalState }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")

    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            "firstName": firstName,
            "lastName": lastName,
            "startDate": startDate?.toISOString(),
            "department": department,
            "dateOfBirth": birthDate?.toISOString(),
            "street": street,
            "city": city,
            "state": state,
            "zipCode": zipCode,

        }
        if (firstName && lastName && birthDate && startDate && street && city && state && zipCode && department) {
            dispatch(addEmployee(user))
            setModalState(true)
            setFirstName("")
            setLastName("")
            setBirthDate(null)
            setStartDate(null)
            setStreet("")
            setCity("")
            setZipCode("")
        }

    }

    return (
        <form >
            <InputField type='text' id="first-name" labelValue="First Name" className="inputField" state={firstName} setState={setFirstName} />
            <InputField type='text' id="last-name" labelValue="Last Name" className="inputField" state={lastName} setState={setLastName} />
            <InputField type='text' id="date-of-birth" labelValue="Date of Birth" className="inputField" state={birthDate} setState={setBirthDate}>
                <DatePicker selected={birthDate} dateFormat="MM/dd/yyyy" onChange={(date) => setBirthDate(date)} onSelect={(date) => setBirthDate(date)} />
            </InputField>
            <InputField type='text' id="start-date" labelValue="Start Date" className="inputField" setState={setStartDate} state={startDate}>
                <DatePicker selected={startDate} dateFormat="MM/dd/yyyy" onChange={(date) => setStartDate(date)} onSelect={(date) => setStartDate(date)} /></InputField>
            <fieldset className='address'>
                <legend>Address</legend>
                <InputField type='text' id="street" labelValue="Street" className="inputField" setState={setStreet} state={street} />
                <InputField type='text' id="city" labelValue="City" className="inputField" setState={setCity} state={city} />
                <Select idName="states" options={states} label="States" customStyle={style} isReset={modalState} setValue={setState} />
                <InputField type='text' id="zip-code" labelValue="Zip Code" className="inputField" setState={setZipCode} state={zipCode} />
            </fieldset>
            <Select options={departments} idName="departments" label="Departments" isReset={modalState} setValue={setDepartment} />
            <button onClick={handleSubmit}>Save</button>
        </form>
    )
}

export default EmployeeForm
const style = {
    fontSize: "16px",
    width: "100%",
    minWidth: "200px",
    optionsMaxHeight: "210px",
    color: "#000",
    scrollBehavior: "smooth",
    labelMargin: "1rem 0 10px 0",
    labelFontSize: "18px",
    generalPadding: "8px 16px",
    buttonBorder: "1px solid grey",
    buttonBackground: "#fafafa",
    optionsBorder: "1px solid grey",
    optionsBackground: "#fff",
    optionsItemHoverBgColor: "blue",
    optionsItemColor: "black",
    optionsItemHoverTxtColor: "white",
    arrowColor: "black",
    arrowSize: 10
}