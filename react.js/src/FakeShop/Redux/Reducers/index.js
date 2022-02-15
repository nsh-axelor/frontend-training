import {combineReducers} from 'redux'
import {productReducer,selectedProductReducer} from "./ProductReducer"
const rootReducer = combineReducers({productReducer,selectedProduct:selectedProductReducer})

export default rootReducer