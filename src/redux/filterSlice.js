import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContact: (_, { payload }) => {
            return payload;
        },
    },
})

export const { filterContact } = filterSlice.actions;