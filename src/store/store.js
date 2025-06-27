import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './products/productsSlice'
import { authSlice } from './auth/authSlice'
import { uiSlice } from './ui/uiSlice'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        products: productSlice.reducer,
        auth: authSlice.reducer
    },
})

