import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
    name:"bank",
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

export const { add, remove } = bankSlice.actions;

export default bankSlice.reducer;

export type PizzaState = {
    bank: {
        orders: { [id: number]: string }
        counter: number
    }
}
