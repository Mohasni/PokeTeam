import { configureStore } from '@reduxjs/toolkit'
import teamReducer from '../features/pokedex/teamsSlice.js'
import authReducer from '../features/auth/authslice.js'
import dresseurReducer from "../features/dresseur/dresseurSlice";

export const Store = configureStore({
    reducer: {
        teams: teamReducer,
        auth: authReducer,
        dresseur: dresseurReducer,
    }
})

Store.subscribe(() => {
    localStorage.setItem("teams", JSON.stringify(Store.getState().teams));
    localStorage.setItem("auth", JSON.stringify(Store.getState().auth));
    localStorage.setItem("dresseur", JSON.stringify(Store.getState().dresseur));
})

