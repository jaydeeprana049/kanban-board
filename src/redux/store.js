import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./DataSlice";
import { dataSelectSlice } from './SelectDataSlice';


export const store = configureStore({
    reducer: {
        dataSlice,
        dataSelectSlice,
    },
});