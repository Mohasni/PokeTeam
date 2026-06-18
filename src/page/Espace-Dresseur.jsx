import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/auth/authslice';
import { useNavigate } from 'react-router-dom';

const Espace = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const dresseur = useSelector((state) => state.dresseur);
  const navigate = useNavigate();

  if (!auth.isAuthenticated) {
    return (
      <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">
          Espace dresseur
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-28 h-28 mb-6"
        />
        <p className="mb-6 text-gray-700 text-center dark:text-white">
          Veuillez vous connecter pour accéder à l'espace dresseur
        </p>
        <button
          onClick={() => window.location.href = "/login"}
          className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Aller à la connexion
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8 text-center">
        Mon Espace Dresseur
      </h1>

      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-32 h-32 mb-6"
        />

        <h2 className="text-3xl font-extrabold mb-6 text-red-500">{dresseur.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-6 text-gray-700 dark:text-gray-200">
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <p className="font-semibold">Email</p>
            <p>{dresseur.email}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <p className="font-semibold">Âge</p>
            <p>{dresseur.age}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <p className="font-semibold">Type préféré</p>
            <p>{dresseur.type}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <p className="font-semibold">Description</p>
            <p className="italic">{dresseur.description}</p>
          </div>
        </div>

        <button
          onClick={() => dispatch(logoutUser(), navigate("/login"))}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Espace;
