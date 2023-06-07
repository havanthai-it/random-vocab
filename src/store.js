import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './components/Search/SearchSlice';
import bookmarkListReducer from './components/BookmarkList/BookmarkListSlice';


const store = configureStore({
    reducer: {
        search: searchReducer,
        bookmarkList: bookmarkListReducer
    }
})

// store.subscribe(() => console.log(store.getState()))

export default store;
