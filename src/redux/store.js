import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './slice/homeSlice';
import musicReducer from './slice/musicSlice'
const store = configureStore({
    reducer:{
        gethome: homeReducer,
        music: musicReducer
    }
});

export default store