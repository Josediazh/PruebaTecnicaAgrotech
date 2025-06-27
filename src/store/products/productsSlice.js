import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeProduct: {},
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
            state.activeProduct = {};
        },
        setActiveProduct: (state, action) => {
            state.activeProduct = action.payload;
        },
        exitActiveProduct: (state) => {
            state.activeProduct = {}
        },
        setNewProduct: (state, action) => {
            state.products.push(action.payload);
            state.activeProduct = {};
        },
        clearEvents: (state, action) => {
            state.products = [];
            state.activeProduct = {};
        },
    }
});

export const { setActiveProduct, exitActiveProduct, setNewProduct, setProduct, clearEvents } = productSlice.actions;