import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './products/productsSlice'
import { authSlice } from './auth/authSlice'
import { uiSlice } from './ui/UiSlice'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: productSlice.reducer,
        auth: authSlice.reducer
    },
})
