import {combineReducers} from 'redux'
import {productReducer,selectedProductReducer,selectCategoryReducer} from "./ProductReducer"
const rootReducer = combineReducers({productReducer,selectedProduct:selectedProductReducer,selectCategory:selectCategoryReducer})

export default rootReducer