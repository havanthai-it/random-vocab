import { createSlice } from '@reduxjs/toolkit';

const bookmarkListSlice = createSlice({
    name: 'bookmarkList',
    initialState: {
        bookmarks: [
            { word: 'elephant', meaning: 'con voi' },
            { word: 'banana', meaning: 'quả chuối' },
            { word: 'table', meaning: 'cái bàn' }
        ]
    },
    reducers: {
        addBookmark: (state, action) => {
            state.bookmarks = [...state.bookmarks, { word: action.payload.word, meaning: action.payload.meaning }];
        },
        removeBookmark: (state, action) => {
            state.bookmarks = state.bookmarks.filter((i) => i.word != action.payload.word);
        }
    }
})

export const { addBookmark, removeBookmark } = bookmarkListSlice.actions;
export default bookmarkListSlice.reducer;
