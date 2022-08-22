import { configureStore } from "@reduxjs/toolkit";
import weather from './slice/weatherSlice'


export const store = configureStore({
    reducer: {
        weather
    }
})