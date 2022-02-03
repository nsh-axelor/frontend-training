import {combineReducers} from 'redux'
import { todoReducer } from './TodoReducer'
import { categoryReducer } from './CategoryReducer'



const reducer = combineReducers({todoReducer,categoryReducer})

export default reducer;