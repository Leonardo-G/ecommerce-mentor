import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStateCart {
    title: string;
    quantity: number;
    price: number;
    img: string;
}

const initialState = {
    title: "",
    quantity: 0,
    price: 0,
    img: "" 
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProduct: ( state, action: PayloadAction<IStateCart> ) => {
            state.img = action.payload.img,
            state.quantity = action.payload.quantity,
            state.price = action.payload.price,
            state.title = action.payload.title
        },
        clearCart: state => {
            state.img = "",
            state.price = 0,
            state.quantity = 0,
            state.title = ""
        }
    }
})

export const { addProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;