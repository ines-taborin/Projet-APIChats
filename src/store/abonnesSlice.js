import { createSlice } from "@reduxjs/toolkit";

const abonnesSlice = createSlice({
    name: "abonnes",
    initialState: {
        abonnes: [],
    },
    reducers: {
        ajouterAbonne: (state, action) => {
            state.abonnes.push(action.payload);
        },
        modifierAbonne: (state, action) => {
            state.abonnes = action.payload;
        },       
        supprimerAbonne: (state, action) => {
            state.abonnes.splice(action.payload, 1);
        },
    },
});

export const { modifierAbonne, ajouterAbonne, supprimerAbonne } =
    abonnesSlice.actions;
export default abonnesSlice.reducer;