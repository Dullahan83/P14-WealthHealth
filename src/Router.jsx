import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from './Pages'
import EmployeeList from './Pages/employeeList'
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/employeeList' element={<EmployeeList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
