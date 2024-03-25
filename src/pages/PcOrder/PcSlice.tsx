import { createSlice } from '@reduxjs/toolkit'

export const pcSlice = createSlice({
    name:"pc",
    initialState: {
        orders: {},
        counter: 0
    },
    reducers: {
        add: (state, action) => {
            state.counter = state.counter +1;
            state.orders = {
                ...state.orders,
                [state.counter]: action.payload
            }
        },
        remove: (state, action) => {
            delete state.orders[action.payload as keyof typeof state.orders]
        }
    }
});

export const { add, remove } = pcSlice.actions;

export default pcSlice.reducer;

export type PcState = {
    pc: {
        orders: { [id: number]: string }
        counter: number
    }
}
