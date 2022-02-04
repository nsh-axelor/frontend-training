import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonList } from "../../actions/PokeActions";
import "./PokemonList.css"

function PokemonList({page,setPage}) {
  // const page = useParams()
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.pokeListReducer);
  const { loading, results, errMsg,count } = pokeList;
  const fetchData = (page) => {
    dispatch(getPokemonList(page))
  }
  useEffect(() => {
    fetchData(page)
  },[page])

  const showdata = () => {
    if (results.length !== 0) {
      return (
      <div className="list-wrapper">
        {
          results.map((poke) => (
            <div className="list-item">
              <p>{poke.name[0].toUpperCase()+poke.name.substring(1)}</p>
              <Link className="poke-link" to={`/pokemon/${poke.name}`}>View More >></Link>
            </div>
          ))
        }
        <div className="buttons">
    <button onClick={() => setPage(page-1)} disabled={page === 1 ? true : false}>Previous</button>
    <button onClick={() => setPage(page+1)} disabled={page === Math.ceil(count / 15) ? true : false}>Next</button>
  </div>
      </div>);
    } else if (loading) {
      return <p>Wait till the laoding completes</p>;
    } else if (errMsg !== "") {
      return <p>{errMsg}</p>;
    }
    return <p>Unable to get data</p>
  };
  return <div>
  {showdata()}

  </div>;
}

export default PokemonList;
