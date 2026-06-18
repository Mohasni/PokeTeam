import React from "react";

const About = () => {
  const features = [
    {
      title: "Créer sa carte de dresseur",
      desc: "Inscris-toi et crée ta carte avec ton nom, âge, description et type préféré.",
      color: "bg-red-400",
    },
    {
      title: "Gestion d'équipe",
      desc: "Ajoute jusqu'à 6 Pokémon à ton équipe et consulte leurs stats détaillées.",
      color: "bg-blue-400",
    },
    {
      title: "Pokédex complet",
      desc: "Explore tous les Pokémon, cherche-les par nom et découvre leurs types et stats.",
      color: "bg-green-400",
    },
    {
      title: "Dark mode",
      desc: "Profite d'une interface agréable même la nuit grâce au mode sombre.",
      color: "bg-gray-700 text-white",
    },
    {
      title: "Animations Framer Motion",
      desc: "Des transitions fluides et des badges animés pour une expérience fun.",
      color: "bg-yellow-400 text-black",
    },
    {
      title: "Gestion d'équipe",
      desc: "Ajoute jusqu'à 6 Pokémon à ton équipe et consulte leurs stats détaillées.",
      color: "bg-blue-400",
    }
  ];

  return (
    <div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">
          À propos de PokeTeam
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24 animate-bounce"
        />
      </header>

      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Bienvenue dans PokeTeam, l'application qui te permet de gérer ton équipe de Pokémon,
          découvrir le Pokédex et créer ta carte de dresseur personnalisée !
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Tout a été conçu pour que l'expérience soit fluide, amusante et immersive, avec
          Dark Mode, animations et badges de type Pokémon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg hover:scale-105 transform transition ${feature.color}`}
          >
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-800 dark:text-gray-100">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
        <p>Créé pour un projet noté avec ❤️ et Pokéballs 🐾</p>
      </div>
    </div>
  );
};

export default About;
