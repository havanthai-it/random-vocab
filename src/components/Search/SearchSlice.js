import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchValue: ''
    },
    reducers: {
        searchVocab: (state, action) => {
            state.searchValue = action.payload
        }
    }
})

export const { searchVocab } = searchSlice.actions;
export default searchSlice.reducer;
