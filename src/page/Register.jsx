import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setDresseur } from "../features/dresseur/dresseurSlice";
import { login } from "../features/auth/authslice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const dresseur = useSelector((state) => state.dresseur);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Nom obligatoire"),
    email: Yup.string().email("Email invalide").required("Email obligatoire"),
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
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe ne correspondent pas"
      )
      .required("Confirmez votre mot de passe"),
  });

  return (
    <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 flex flex-col">
      <header className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 text-center">
          Créer ma carte de dresseur
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24"
        />
      </header>

      <Formik
        initialValues={dresseur}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          dispatch(setDresseur(values));
          dispatch(login(values));
          navigate("/Espace-Dresseur");
        }}
      >
        <Form className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-2xl mx-auto flex flex-col gap-4">
          <Field
            name="name"
            placeholder="Nom"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          <ErrorMessage
            name="name"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            name="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            name="age"
            type="number"
            placeholder="Âge"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          <ErrorMessage
            name="age"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            as="textarea"
            name="description"
            placeholder="Description"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
          <ErrorMessage
            name="description"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            as="select"
            name="type"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="">Type préféré</option>
            <option value="Feu">Feu</option>
            <option value="Eau">Eau</option>
            <option value="Plante">Plante</option>
            <option value="Électrik">Électrik</option>
          </Field>
          <ErrorMessage
            name="type"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
            type="password"
            name="password"
            placeholder="Mot de passe"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm"
          />

          <Field
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
            type="password"
            name="confirmPassword"
            placeholder="Confirmez le mot de passe"
          />
          <ErrorMessage
            name="confirmPassword"
            component="p"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Créer ma carte
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-red-500 underline mt-2"
          >
            Se connecter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
