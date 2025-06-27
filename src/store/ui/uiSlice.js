import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:
    {
        onModalOpen: (state) => {
            state.isModalOpen = true;
        },
        onModalClose: (state) => {
            state.isModalOpen = false;
        },
    }
});

export const { onModalClose, onModalOpen } = uiSlice.actions;