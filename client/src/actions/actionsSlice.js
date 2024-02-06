import { createSlice } from '@reduxjs/toolkit'

const initialState = { token: localStorage.getItem('token') === null ? '' : JSON.parse (localStorage.getItem('token')), userId: localStorage.getItem('userId') === null ? '' : JSON.parse (localStorage.getItem('userId')) }

const actionsSlice = createSlice({
    name: 'actionsSlice',
    initialState,
    reducers: {
        updateToken: (state, { payload }) => {
            state.token = payload;
            localStorage.setItem('token', JSON.stringify(state.token))
        },

        updateUserId: (state, { payload }) => {
            state.userId = payload;
            localStorage.setItem('userId', JSON.stringify(state.userId))
        },
    }
});

export const { updateToken, updateUserId } = actionsSlice.actions;

export default actionsSlice.reducer;