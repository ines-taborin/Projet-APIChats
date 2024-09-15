import { createSlice } from "@reduxjs/toolkit";

const abonnesSlice = createSlice({
    name: "abonnes",
    initialState: {
        abonnes: [
            {
                nom: "Ines Taborin",
                mail: "Inestaborin@mail.com",
            },
            {
                nom: "Fabrice Déhoulé",
                mail: "FabriceDehoule@mail.com",
            },
            {
                nom: "Laurent Drolet",
                mail: "LaurentDrolet@mail.com",
            },
            {
                nom: "Carine Croteau",
                mail: "CarineCroteau@mail.com",
            },
            {
                nom: "Bruno Gauthier-Lafond",
                mail: "BrunoGauthier-Lafond@mail.com",
            },
        ],
    },
    reducers: {
        ajouterAbonne: (state, action) => {
            state.abonnes.push(action.payload);
        },
        modifierAbonne: (state, action) => {
            const { index, updatedAbonne } = action.payload;
            state.abonnes[index] = updatedAbonne;
        },
        supprimerAbonne: (state, action) => {
            state.abonnes.splice(action.payload, 1);
        },
    },
});

export const { modifierAbonne, ajouterAbonne, supprimerAbonne } =
    abonnesSlice.actions;
export default abonnesSlice.reducer;