import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeProduct: {},
    productsMessage: null,
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
        setNewProduct: (state, action) => {
            state.products.push(action.payload);
            state.activeProduct = {};
        },
        setMessageProduct: (state, action) => {
            state.productsMessage = action.payload;
        },
        clearMessageProduct: (state) => {
            state.productsMessage = null;
        },
        clearProducts: (state) => {
            state.products = [];
            state.activeProduct = {};
        },
    }
});

export const { setNewProduct, setProduct, clearProducts, setMessageProduct, clearMessageProduct } = productSlice.actions;