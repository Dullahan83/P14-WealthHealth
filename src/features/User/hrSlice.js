import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeeList: []
}

export const hrSlice = createSlice({
    name: "employeeList", initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeeList.push(action.payload)
        }
    }
})
export const { addEmployee } = hrSlice.actions
export default hrSlice.reducer