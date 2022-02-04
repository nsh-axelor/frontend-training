import { fail, loading, pokeSuccess } from "../actions/actionType";
const initialState = {
    loading:false,
    data:{},
    errMsg:""
}
const pokemonReducer = (state = initialState,action) => {
    switch(action.type){
        case loading:
            return {
                ...state,
                loading:true,
                errMsg:""
            }
        case pokeSuccess:
            return{
                ...state,
                loading:false,
                data:{
                    ...state.data,
                    [action.pokemon]:action.payload
                }
            }
        case fail:
            return{
                ...state,
                loading:false,
                errMsg:"There is some error getting "+action.pokemon
            }
        default:
            return state
    }
}

export default pokemonReducer