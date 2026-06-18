import { createSlice } from "@reduxjs/toolkit";
import * as Yup from "yup";


const deresseurInitial = JSON.parse(localStorage.getItem("dresseur")) || {
    name: "",
    email: "",
    age : 0,
    description : "",
    type : "",
    password: ""
};

const DresseurSlice = createSlice({
    name: 'dresseur',
    initialState: deresseurInitial,
    reducers: {
        setDresseur: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.age = action.payload.age;
            state.description = action.payload.description;
            state.type = action.payload.type;
            state.password = action.payload.password;
        },
    }
})
export const { setDresseur } = DresseurSlice.actions;
export default DresseurSlice.reducer;
export const validationSchema = Yup.object({
  name: Yup.string().required("Nom obligatoire"),
  email: Yup.string()
    .email("Email invalide")
    .required("Email obligatoire"),
  age: Yup.number()
    .integer("Doit être un entier")
    .positive("Doit être positif")
    .min(11, "Âge minimum 11 ans")
    .required("Âge obligatoire"),
  description: Yup.string()
    .min(20, "Minimum 20 caractères")
    .max(200, "Maximum 200 caractères")
    .required("Description obligatoire"),
  type: Yup.string().required("Type obligatoire"),
    password: Yup.string()
    .min(6, "Minimum 6 caractères")
    .required("Mot de passe obligatoire"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Les mots de passe ne correspondent pas")
    .required("Confirmez votre mot de passe"),
});