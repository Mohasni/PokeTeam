import { useDispatch, useSelector } from "react-redux";
import { remouveTeam } from "../features/pokedex/teamsSlice";

const Gestion = () => {
  const teams = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900">
    
      <header className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 text-center">
          Gestion d'Équipe
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24"
        />  
      </header>
      {teams.length === 0 ? (
        <div className="flex justify-center">
          <p className="text-gray-600 text-lg bg-white px-6 py-4 rounded-xl shadow-md">
            Aucune équipe disponible. Ajoutez des Pokémon depuis la page de détail.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
          {teams.map((pokemon, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 dark:bg-gray-300"
            >
              <h2 className="text-xl font-bold capitalize text-gray-800 mb-4">
                {pokemon.name}
              </h2>

              <img
                src={pokemon.img}
                alt={pokemon.name}
                className="w-32 h-32 object-contain mb-6"
              />

              <button
                onClick={() => dispatch(remouveTeam(pokemon))}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Retirer de l'équipe
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gestion;
