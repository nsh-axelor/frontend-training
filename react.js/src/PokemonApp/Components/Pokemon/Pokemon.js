import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../actions/PokeActions";
import _ from "lodash"
import "./Pokemon.css"

function Pokemon() {
  const { pokemon } = useParams();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.pokemonReducer)
  useEffect(() => {
    dispatch(getPokemon(pokemon))
  },[])

  const showData = () => {
    if (!_.isEmpty(data.data[pokemon])) {
      const pokeData = data.data[pokemon];
      return(
        <div className="pokemon-wrapper">
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt=""/>
            <img src={pokeData.sprites.back_default} alt=""/>
            <img src={pokeData.sprites.front_shiny} alt=""/>
            <img src={pokeData.sprites.back_shiny} alt=""/>
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map(el => {
              return <p>{el.stat.name} - {el.base_stat}</p>
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => {
              return <p>{el.ability.name}</p>
            })}
          </div>
        </div>
      )
    }

    if (data.loading) {
      return <p>Loading...</p>
    }

    if (data.errorMsg !== "") {
      return <p>{data.errorMsg}</p>
    }

    return <p>error getting pokemon</p>
  }
  return (
    <div>
      {showData()}
    </div>
  );
}

export default Pokemon;
