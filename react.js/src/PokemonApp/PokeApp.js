import React, { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import PokemonList from "./Components/PokemonList";
import Pokemon from "./Components/Pokemon";
import "./PokeApp.css"
function PokeApp() {
  const [pokemon,setPokemon] = useState("")
  const [page,setPage] = useState(1)
  return (
    <div>
    <div className="nav-link">
      <div className="search">
        <input placeholder="Type the pokemon here" onChange={(e) => setPokemon(e.target.value)} />
        <Link to={`pokemon/${pokemon}`}>Search</Link>
      </div>
      <Link to="/">Back To Main Page</Link>
      </div>
      <Routes>
        <Route path="/">
          <Route path="/" element={<PokemonList page={page} setPage={setPage} />} />
          <Route path="pokemon/:pokemon" element={<Pokemon />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default PokeApp;
