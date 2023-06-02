import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './components/Search/SearchSlice';


const store = configureStore({
    reducer: {
        search: searchReducer
    }
})

store.subscribe(() => console.log(store.getState()))

export default store;
