import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div>
        <img src="./error404.png" alt="Erreur 404" className="w-[420px]" />
        <h2 className="text-center">Cette page n'a pas été trouvé...</h2>
        <Link className="" to="/">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
