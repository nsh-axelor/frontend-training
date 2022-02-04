import axios from "axios"
import { fail, loading, pokeSuccess, success } from "./actionType"

const perPage = 15
export const getPokemonList = (page) => async dispatch =>{
    try{
        dispatch({
            type:loading
        })

        const offset = (page*perPage) - perPage

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`)

        dispatch({
            type:success,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type:fail
        })
    }
}

export const getPokemon = (pokemon) => async dispatch => {
    try{
        dispatch({
            type:loading
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type:pokeSuccess,
            payload:res.data,
            pokemon
        })
    }catch(err){
        dispatch({
            type:fail
        })
    }
}