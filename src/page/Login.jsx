import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dresseur = useSelector((state) => state.dresseur);

 const validationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("Email obligatoire"),
    password: Yup.string().required("Mot de passe obligatoire"),
  });

  return (
    <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 flex flex-col">
      <header className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 text-center">
          Connexion
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24"
        />
      </header>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setFieldError }) => {
          if (values.email === dresseur.email) {
            dispatch(login(dresseur));
            navigate("/Espace-Dresseur");
          } else {
            setFieldError("email", "Email incorrect");
          }
        }}
      >
        <Form className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-2xl mx-auto flex flex-col gap-4">
          <Field
            name="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200"
          />
           <Field className="border px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-gray-200" type="password" name="password" placeholder="Mot de passe" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Se connecter
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-red-500 underline mt-2"
          >
            S'inscrire
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

