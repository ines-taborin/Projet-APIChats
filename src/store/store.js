import { configureStore } from "@reduxjs/toolkit";
import abonnesReducer from "./abonnesSlice";

const store = configureStore({
    reducer: {
        abonnes: abonnesReducer,
    },
});

export default store