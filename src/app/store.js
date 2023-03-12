import { configureStore } from "@reduxjs/toolkit"
import hrSlice from "../features/User/hrSlice"




export const store = configureStore({
    reducer: {
        hr: hrSlice
    },
})