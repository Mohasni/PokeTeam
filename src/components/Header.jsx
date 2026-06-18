import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dresseur = useSelector((state) => state.dresseur);
  const navigate = useNavigate();

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full h-16 bg-white dark:bg-gray-800 shadow-md flex items-center px-8 sticky top-0 z-50 transition-colors">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-extrabold text-red-500 dark:text-red-400">
          PokeTeam
        </Link>
      </div>
      <nav className="flex gap-6 font-medium text-gray-700 dark:text-gray-300">
        <Link className="hover:text-red-500 dark:hover:text-red-400 transition" to="/">Pokédex</Link>
        <Link className="hover:text-red-500 dark:hover:text-red-400 transition" to="/Gestion-Equipe">Gestion d'Équipe</Link>
        <Link className="hover:text-red-500 dark:hover:text-red-400 transition" to="/Espace-Dresseur">Espace Dresseur</Link>
        <Link className="hover:text-red-500 dark:hover:text-red-400 transition" to="/about">À propos</Link>
      </nav>
      <div className="flex-1 flex justify-end items-center gap-4">
        {auth.isAuthenticated ? (
          <p className="font-semibold text-gray-700 dark:text-gray-300">
            Bonjour, <span className="text-red-500 dark:text-red-400">{dresseur.name}</span>
          </p>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-600 dark:hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}


        <button
          onClick={toggleDark}
          className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          🌙
        </button>
      </div>
    </header>
  );
};

export default Header;

