import {combineReducers} from 'redux'
import { todoReducer } from './TodoReducer'


const reducer = combineReducers({todoReducer})

export default reducer;