import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    value: 0,
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = + 1;

        },
        decrement: (state) => {
            state.value - + 1;

        }
    }
})