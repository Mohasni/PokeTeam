import { createSlice } from "@reduxjs/toolkit";
import { clearTeam } from "../pokedex/teamsSlice";
const savedAuth = JSON.parse(localStorage.getItem("auth")) || {
    isAuthenticated: false,
    user: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState: savedAuth,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    }
})
export const logoutUser = () => (dispatch) => {
  dispatch(clearTeam());   
  dispatch(logout());      
};
export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;