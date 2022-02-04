import { fail, loading, success } from "../actions/actionType"

const initialState = {
    loading : false,
    results : [],
    errMsg : "",
    count: 0

}

const pokemonListreducer = (state=initialState,action) => {
    switch(action.type){
        case loading:
            return {
                ...state,
                loading : true,
                errMsg : ""
            }
        case success:
            return{
                ...state,
                loading:false,
                results:action.payload.results,
                errMsg:"",
                count:action.payload.count
            }
        case fail:
            return {
                ...state,
                loading:false,
                errMsg:"Unable to get the pokemon list"
            }
        default:
            return state
    }
}

export default pokemonListreducer; 