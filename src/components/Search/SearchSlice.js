import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        word: '',
        meaning: '',
        loading: false
    },
    reducers: {
        searchVocab: (state, action) => {
            state.word = action.payload.word;
            state.meaning = action.payload.meaning;
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { searchVocab, toggleLoading } = searchSlice.actions;
export default searchSlice.reducer;
