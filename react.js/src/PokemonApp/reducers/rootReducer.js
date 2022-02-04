import {combineReducers} from 'redux'
import pokeListReducer from './PokeListReducer'
import pokemonReducer from './PokemonReducer'


const rootReducer = combineReducers({pokeListReducer,pokemonReducer})

export default rootReducer