import { createSlice } from "@reduxjs/toolkit";

const savedTeams = JSON.parse(localStorage.getItem("teams")) || [];

const TeamsSlice = createSlice({
  name: "teams",
  initialState: savedTeams,
  reducers: {
    addToTeam: (state, action) => {
      state.push(action.payload);
    },
    remouveTeam: (state, action) => {
      return state.filter((pokemon) => pokemon.name !== action.payload.name);
    },
    clearTeam: () => {
      return []; 
    },
  },
});

export const { addToTeam, remouveTeam, clearTeam } = TeamsSlice.actions;
export default TeamsSlice.reducer;