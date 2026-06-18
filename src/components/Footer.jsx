import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-white dark:bg-gray-900 border-t dark:border-gray-700">
      <div className=" px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex gap-6 text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600 transition">À propos</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © <span className="font-semibold">PokeTeam</span> — Tous droits réservés
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;