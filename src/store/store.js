import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './products/productsSlice'
import { uiSlice } from './ui/UiSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: productSlice.reducer,
        auth: authSlice.reducer
    },
})
