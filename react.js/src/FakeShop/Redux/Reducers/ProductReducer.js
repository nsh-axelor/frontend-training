import { ActionTypes } from "../Constants/ActionTypes"

const productReducer = (state=[],{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return [...payload]
        default:
            return state
    }
}

const selectedProductReducer = (state={},{type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
} 

const selectCategoryReducer = (state="all",{type,payload}) => {
    switch(type){
        case ActionTypes.SELECT_CATEGORY:
            return payload
        default:
            return state;
    }
}

export {productReducer,selectedProductReducer,selectCategoryReducer}